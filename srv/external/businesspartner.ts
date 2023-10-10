/* eslint-disable require-yield */

import cds, { ApplicationService } from '@sap/cds'
// import { Request, Service } from '@sap/cds/apis/services'
import { Event } from '../common/constants'
import { Request, Service } from '@sap/cds/apis/services'
import { A_BusinessPartner } from '../../@cds-models/businesspartner/index'
interface IEventData {
    BusinessPartner: string
}

class businesspartner extends ApplicationService {
    bupaSrv?: Service | null
    async init() {
        this.after(Event.CREATE, A_BusinessPartner, this.afterCreate)
        this.after(Event.UPDATE, A_BusinessPartner, this.afterUpdate)
        super.init()
    }
    private afterCreate = (obj: object, req: Request) => {
        const payload = obj
        const that = this;
        setTimeout(() => {
            that.emit('BusinessPartner.Created', payload)
        }, 1000)
    }

    private afterUpdate = async (obj: object, req: Request) => {
        const payload = obj
        const that = this;
        setTimeout(() => {
            this.emit('BusinessPartner.Changed', payload)
        }, 1000)
    }
}
export { businesspartner }
