/* eslint-disable require-yield */

import cds, { ApplicationService } from '@sap/cds'
import { Event, BUSINESSPARTNERTOPICBASE } from './common/constants'
import type RemoteService from '@sap/cds/apis/services'
// import { Request, Service } from '@sap/cds/apis/services'
import EventMessage from "@sap/cds/apis/services"
import { Request, Service } from '@sap/cds/apis/services'
import { BusinessPartner, BusinessPartnerAddresses, BusinessPartnerVerification, Address } from '../@cds-models/AdminService/index'
// import type { BusinessPartnerVerification as BPVerification } from '../@cds-models/AdminService/index'
interface IEventData {
    BusinessPartner: string
}

class AdminService extends ApplicationService {
    bupaSrv?: Service | null

    async init() {
        this.bupaSrv = await cds.connect.to('businesspartner')

        this.bupaSrv.before('*', msg => {
            console.log(`Received message with event ${msg.event}`, 'and headers ', JSON.stringify(msg.headers))
        })

        this.on(Event.READ, BusinessPartnerAddresses, this.delegateQuery)
        this.on(Event.READ, BusinessPartner, this.delegateQuery)

        this.bupaSrv.on('BusinessPartner.Created', this.handleBusinessPartnerCreated)
        this.bupaSrv.on('BusinessPartner.Changed', this.handleBusinessPartnerChanged)

        this.before(Event.SAVE, BusinessPartnerVerification, this.beforeSaveAddresses)

        const Testsdsd = require('../@cds-models/AdminService/index');
        this.on('block', BusinessPartnerVerification, this.blockBusinessPartner)
        this.on('unblock', BusinessPartnerVerification, this.unblockBusinessPartner)

        super.init()
    }

    private delegateQuery = async (req: Request) => {
        console.log("Test");
        return this.bupaSrv.run(req.query)
    }

    private handleBusinessPartnerCreated = async (msg: Request) => {
        console.log("BP CREATED!!!");
        const { BusinessPartner: businessPartnerID } = msg.data as IEventData
        if (await this.getLocalBusinessPartner(businessPartnerID, msg)) {
            console.warn(`BusinessPartner ${businessPartnerID} already persisted, no need to proceed`)
            return
        }
        const businessPartnerS4 = await this.getBusinessPartnerFromS4(businessPartnerID, msg)

        if (!businessPartnerS4) return
        //check error handling

        const verification = this.cloneRemoteToLocalBupa(businessPartnerS4)
        verification.verificationStatus_code = 'N'
        console.log(verification);
        const localBupa = await this.createLocalBupa(msg, verification)
        if (!localBupa) {
            msg.error('400', 'technical error while inserting new Verification')
        }
    }

    private handleBusinessPartnerChanged = async (msg: Request) => {
        console.log("test");
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        const { BusinessPartner: businessPartnerID } = msg.data as IEventData
        const businessPartnerS4 = (await this.getBusinessPartnerFromS4(businessPartnerID, msg)) as BusinessPartner
        const localBusinessPartner = await this.getLocalBusinessPartner(businessPartnerID, msg)
        const verification = this.cloneRemoteToLocalBupa(businessPartnerS4)
        verification.verificationStatus_code = 'U'
        if (!localBusinessPartner) {
            this.createLocalBupa(msg, verification)
        } else {
            for (const addresses of verification.addresses) {
                addresses.verifications_ID = localBusinessPartner.ID
            }
            this.updateLocalBupa(msg, verification)
        }
    }

    private async getLocalBusinessPartner(businessPartnerId: string, req: Request): Promise<BusinessPartnerVerification | null> {
        const localBusinessPartner = await cds.tx(req).run(
            SELECT.one(BusinessPartnerVerification, (bp: any) => {
                bp.ID
                bp.BusinessPartner, bp.BusinessPartnerIsBlocked, bp.FirstName, bp.LastName, bp.verificationStatus_code
                bp.addresses('*')
            }).where({ BusinessPartner: businessPartnerId })
        )
        return localBusinessPartner
    }

    private getBusinessPartnerFromS4 = async (businessPartnerID: string, req: Request): Promise<BusinessPartner | null> => {
        try {
            const s4Bupa = await this.bupaSrv?.tx(req).run(
                SELECT.one(BusinessPartner, (bp: any) => {
                    bp.BusinessPartner, bp.BusinessPartnerIsBlocked, bp.FirstName, bp.LastName, bp.addresses((address: Address) => { address.AddressID, address.CityName, address.Country, address.HouseNumber, address.StreetName, address.PostalCode })
                }).where({ BusinessPartner: businessPartnerID })
            )
            return s4Bupa
        } catch (error) {
            console.error(error)
            return null
        }
    }

    private cloneRemoteToLocalBupa(businessPartnerS4: BusinessPartner):
        BusinessPartnerVerification {
        const verification = {} as BusinessPartnerVerification
        Object.assign(verification, businessPartnerS4)
        return verification
    }

    private async createLocalBupa(req: Request, verification: BusinessPartnerVerification): Promise<boolean> {
        const insertResult = await cds.tx(req).run(INSERT.into(BusinessPartnerVerification).entries(verification))
        if (!insertResult) {
            console.error(`ERROR: couldn't insert new verification entry for BusinessPartner ${verification.BusinessPartner} with status "${verification.verificationStatus_code}", skip processing`)
            return false
        }
        console.log(`Saved BusinessPartner ${verification.BusinessPartner} to the HDI Container on SAP HANA Cloud`)
        return true
    }

    private async updateLocalBupa(req: Request, verification: BusinessPartnerVerification): Promise<boolean> {
        const updateResult = cds.tx(req).run(UPDATE.entity(BusinessPartnerVerification).set(verification).where({ BusinessPartner: verification.BusinessPartner }))
        if (!updateResult) return false
        console.log(`Updating BusinessPartner ${verification.BusinessPartner} in SAP HANA Cloud`)
        return true

    }

    private beforeSaveAddresses = async (req: Request) => {
        const businessPartner: BusinessPartnerVerification = req.data as BusinessPartnerVerification

        for (const address of businessPartner.addresses) {
            const updated = await this.updateS4BupaAddress(req, address, businessPartner.BusinessPartner)
            if (updated) req.notify(204, `Updated [${businessPartner.FirstName} ${businessPartner.LastName}] in SAP S/4HANA`)
        }
    }

    private async updateS4BupaAddress(req: Request, address: Address, businessPartnerId: string): Promise<boolean> {
        const updateResult = await this.bupaSrv?.tx(req).run(UPDATE.entity(BusinessPartnerAddresses).set(address).where({ BusinessPartner: businessPartnerId, AddressID: address.AddressID }))

        if (!updateResult) return false
        else return true
    }

    private blockBusinessPartner = async (req: Request) => {
        const localBupaUUID = (req.params[0] as any).ID
        const localBupa = (await this.getBusinessPartnerByUUID(localBupaUUID, req)) as BusinessPartnerVerification
        const updated = await this.updateBlockedStatusS4(req, localBupa.BusinessPartner, true)
        if (updated) req.notify(204, `Blocked [${localBupa.FirstName} ${localBupa.LastName}] in SAP S/4HANA`)
    }

    private unblockBusinessPartner = async (req: Request) => {
        const localBupaUUID = (req.params[0] as any).ID
        const localBupa = (await this.getBusinessPartnerByUUID(localBupaUUID, req)) as BusinessPartnerVerification
        const updated = await this.updateBlockedStatusS4(req, localBupa.BusinessPartner, false)
        if (updated) req.notify(204, `Unblocked [${localBupa.FirstName} ${localBupa.LastName}] in SAP S/4HANA`)
    }

    private async updateBlockedStatusS4(req: Request, businessPartnerId: string, blockStatus: boolean): Promise<boolean> {
        const updateResult = await this.bupaSrv?.tx(req).run(UPDATE.entity(BusinessPartner).set({ BusinessPartnerIsBlocked: blockStatus })
            .where({ BusinessPartner: businessPartnerId }))
        if (!updateResult) return false
        else return true
    }

    private async getBusinessPartnerByUUID(UUID: string, req: Request): Promise<BusinessPartnerVerification | null> {
        const localBusinessPartner = (await cds.tx(req).run(SELECT.one(BusinessPartnerVerification).where({ ID: UUID }))) as BusinessPartnerVerification
        if (!localBusinessPartner) {
            console.error(`ERROR: couldn't find BusinessPartner for UUID ${UUID}, skip processing`)
            return null
        } else {
            return localBusinessPartner
        }
    }

}

export { AdminService }