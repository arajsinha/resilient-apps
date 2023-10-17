"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
process.env.CDS_TYPESCRIPT = "true";
const cds_1 = __importDefault(require("@sap/cds"));
const project = __dirname + '/..';
const { chai, GET, DELETE, POST, PATCH, expect } = cds_1.default.test(project, '--with-mocks', '--in-memory').verbose(false);
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
// const { chai, GET, DELETE, POST, PATCH, expect } = cds.test('-ts serve', '--in-memory', '--project', project).verbose(false)
const AUTH = { auth: { username: 'bp-admin', password: '123' } };
const newBupa = {
    BusinessPartner: 'TEST11',
    FirstName: 'Max',
    LastName: 'Streifeneder',
    BusinessPartnerIsBlocked: true,
    to_BusinessPartnerAddress: [
        {
            BusinessPartner: 'TEST11',
            AddressID: '99999',
            HouseNumber: '1',
            CityName: 'Walldorf',
            Country: 'DE',
            StreetName: 'Weg',
            PostalCode: '69190'
        },
        {
            BusinessPartner: 'TEST11',
            AddressID: '11111',
            HouseNumber: '2',
            CityName: 'Munich',
            Country: 'DE',
            StreetName: 'Straße',
            PostalCode: '81371'
        }
    ]
};
const statusValues = [
    {
        code: 'INV',
        value: 'INVALID',
        criticality: 1,
        updateCode: false
    },
    {
        code: 'N',
        value: 'NEW',
        criticality: 2,
        updateCode: false
    },
    {
        code: 'U',
        value: 'UPDATED',
        criticality: 2,
        updateCode: false
    },
    {
        code: 'V',
        value: 'VERIFIED',
        criticality: 3,
        updateCode: true
    }
];
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield cds_1.default.connect.to('db');
    expect(db).to.exist;
    expect(db.model).to.exist;
}));
describe('GET admin/$metadata', function () {
    chai.use(chai_as_promised_1.default);
    it('should fail unauthenticated', () => __awaiter(this, void 0, void 0, function* () {
        yield expect(GET('admin/$metadata')).to.be.rejectedWith(axios_1.AxiosError);
    }));
    it('should work authenticated', () => __awaiter(this, void 0, void 0, function* () {
        const res = (yield GET('odata/v4/admin/$metadata', AUTH));
        //console.log(res)
        expect(res.headers).to.contain({
            'content-type': 'application/xml',
            'odata-version': '4.0'
        });
        expect(res.status).to.be.equal(200);
        expect(res.data).to.contain('EntitySet Name="StatusValues" EntityType="AdminService.StatusValues"');
        expect(res.data).to.contain('EntitySet Name="BusinessPartner" EntityType="AdminService.BusinessPartner"');
        expect(res.data).to.contain('EntitySet Name="Addresses" EntityType="AdminService.Addresses"');
        expect(res.data).to.contain('EntitySet Name="BusinessPartnerAddresses" EntityType="AdminService.BusinessPartnerAddresses"');
        expect(res.data).to.contain('EntitySet Name="BusinessPartnerVerification" EntityType="AdminService.BusinessPartnerVerification"');
    }));
});
describe('GET /admin/StatusValues', function () {
    it('should deliver an array of 4 statusValues', () => __awaiter(this, void 0, void 0, function* () {
        const res = (yield GET('odata/v4/admin/StatusValues', AUTH));
        expect(res.status).to.be.equal(200);
        expect(res.headers).to.contain({
            'content-type': 'application/json;odata.metadata=minimal'
        });
        expect(Array.isArray(res.data.value)).to.be.true;
        expect(res.data.value).to.have.lengthOf(4);
        expect(res.data.value).to.deep.equal(statusValues);
    }));
});
describe('Test Mock endpoints for S/4', function () {
    it('metadata', () => __awaiter(this, void 0, void 0, function* () {
        const res = (yield GET('odata/v4/businesspartner'));
        console.log('res');
        expect(res.status).to.be.equal(200);
        expect(res.data.value).to.have.lengthOf(35); // 35 Entities
        expect(res.data['@odata.context']).to.be.equal('$metadata');
    }));
    it('GET Request BusinessPartner', () => __awaiter(this, void 0, void 0, function* () {
        console.log(project);
        const res = (yield GET('odata/v4/businesspartner/A_BusinessPartner'));
        expect(res.status).to.be.equal(200);
        expect(res.data.value).to.have.lengthOf(3); // 3 Test Business Partners
        expect(res.data['@odata.context']).to.be.equal('$metadata#A_BusinessPartner');
    }));
    it('DELETE Request BusinessPartner', () => __awaiter(this, void 0, void 0, function* () {
        //get BusinessPartner by ID
        const readBupaRes = (yield GET(`odata/v4/businesspartner/A_BusinessPartner('MAXSTR')`));
        expect(readBupaRes.data.BusinessPartner).to.be.equal('MAXSTR');
        //delete Business Partner
        //get BusinessPartner by ID - > away
        const deleteBupaRes = (yield DELETE(`odata/v4/businesspartner/A_BusinessPartner('MAXSTR')`));
        expect(deleteBupaRes.status).to.be.equal(204);
        expect(GET(`odata/v4/businesspartner/A_BusinessPartner('MAXSTR')`)).to.be.rejectedWith(axios_1.AxiosError);
    }));
    it('GET Request BusinessPartnerAddress', () => __awaiter(this, void 0, void 0, function* () {
        const res = yield GET('odata/v4/businesspartner/A_BusinessPartnerAddress');
        expect(res.status).to.be.equal(200);
        expect(res.data.value).to.have.lengthOf(0); // 3 Test Business Partners
        expect(res.data['@odata.context']).to.be.equal('$metadata#A_BusinessPartnerAddress');
    }));
});
describe('Test changes in S/4 through mocks', function () {
    it.only('Create Business Partner', () => __awaiter(this, void 0, void 0, function* () {
        const res = (yield POST('odata/v4/businesspartner/A_BusinessPartner', newBupa));
        expect(res.status).to.be.equal(201);
        yield new Promise((resolve) => setTimeout(resolve, 1000));
        const verResponse = yield GET(`odata/v4/admin/BusinessPartnerVerification?$expand=addresses`, AUTH);
        const verification = verResponse.data.value[0];
        expect(verResponse.status).to.be.equal(200);
        expect(verification.BusinessPartner).to.be.equal(newBupa.BusinessPartner);
        expect(verification.FirstName).to.be.equal(newBupa.FirstName);
        expect(verification.LastName).to.be.equal(newBupa.LastName);
        expect(verification.BusinessPartnerIsBlocked).to.be.equal(newBupa.BusinessPartnerIsBlocked);
        expect(verification.IsActiveEntity).to.be.equal(true);
        expect(verification.verificationStatus_code).to.be.equal('N');
        for (const newBupaAddress of newBupa.to_BusinessPartnerAddress) {
            const verificationAddress = verification.addresses.find((verificationAddress) => verificationAddress.AddressID === newBupaAddress.AddressID);
            expect(verificationAddress.AddressID).to.be.equal(newBupaAddress.AddressID);
            expect(verificationAddress.CityName).to.be.equal(newBupaAddress.CityName);
            expect(verificationAddress.Country).to.be.equal(newBupaAddress.Country);
            expect(verificationAddress.HouseNumber).to.be.equal(newBupaAddress.HouseNumber);
            expect(verificationAddress.PostalCode).to.be.equal(newBupaAddress.PostalCode);
            expect(verificationAddress.StreetName).to.be.equal(newBupaAddress.StreetName);
            expect(verificationAddress.IsActiveEntity).to.be.equal(true);
            expect(verificationAddress.verifications_ID).to.be.equal(verification.ID);
        }
    }), 15000);
    it.only('Update Business Partner Block Status', () => __awaiter(this, void 0, void 0, function* () {
        const updateJson = {
            BusinessPartner: newBupa.BusinessPartner,
            BusinessPartnerIsBlocked: !newBupa.BusinessPartnerIsBlocked
        };
        const { status } = (yield PATCH(`odata/v4/businesspartner/A_BusinessPartner('${newBupa.BusinessPartner}')`, updateJson));
        expect(status).to.be.equal(200);
        // await new Promise((resolve) => setTimeout(resolve, 2000)) // make sure that the service can process the event
        const { data: dataGet, status: statusGet } = (yield GET(`odata/v4/admin/BusinessPartnerVerification?$expand=addresses&$filter=BusinessPartner eq '${newBupa.BusinessPartner}'`, AUTH));
        expect(statusGet).to.be.equal(200);
        expect(dataGet.value).to.have.lengthOf(1);
        expect(dataGet.value[0].addresses).to.have.lengthOf(newBupa.to_BusinessPartnerAddress.length);
        const verification = dataGet.value[0];
        expect(verification.BusinessPartner).to.be.equal(newBupa.BusinessPartner);
        expect(verification.FirstName).to.be.equal(newBupa.FirstName);
        expect(verification.LastName).to.be.equal(newBupa.LastName);
        expect(verification.BusinessPartnerIsBlocked).to.be.equal(!newBupa.BusinessPartnerIsBlocked);
        expect(verification.IsActiveEntity).to.be.equal(true);
        expect(verification.verificationStatus_code).to.be.equal('U');
        for (const newBupaAddress of newBupa.to_BusinessPartnerAddress) {
            const verificationAddress = verification.addresses.find((verificationAddress) => verificationAddress.AddressID === newBupaAddress.AddressID);
            expect(verificationAddress.AddressID).to.be.equal(newBupaAddress.AddressID);
            expect(verificationAddress.CityName).to.be.equal(newBupaAddress.CityName);
            expect(verificationAddress.Country).to.be.equal(newBupaAddress.Country);
            expect(verificationAddress.HouseNumber).to.be.equal(newBupaAddress.HouseNumber);
            expect(verificationAddress.PostalCode).to.be.equal(newBupaAddress.PostalCode);
            expect(verificationAddress.StreetName).to.be.equal(newBupaAddress.StreetName);
            expect(verificationAddress.IsActiveEntity).to.be.equal(true);
            expect(verificationAddress.verifications_ID).to.be.equal(verification.ID);
        }
    }), 15000);
});
