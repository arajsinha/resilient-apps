// This is an automatically generated file. Please do not change its contents manually!
import * as _tfe_model_bpVerification from './../tfe/model/bpVerification';
import * as __ from './../_';
import * as _ from './..';
import * as _businesspartner from './../businesspartner';
export function _BusinessPartnerVerificationAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BusinessPartnerVerification extends Base {
        BusinessPartner?: string;
        FirstName?: string;
        LastName?: string;
        verificationStatus?: __.Association.to<_tfe_model_bpVerification.StatusValue>;
        verificationStatus_code?: string;
        addresses?: __.Composition.of.many<_tfe_model_bpVerification.Addresses>;
        addresses_ID?: string;
        BusinessPartnerIsBlocked?: boolean;
    static actions: {
      block: { (): any, __parameters: {}, __returns: any }
      unblock: { (): any, __parameters: {}, __returns: any }
    }
  };
}
export class BusinessPartnerVerification extends _._managedAspect(_._cuidAspect(_BusinessPartnerVerificationAspect(__.Entity))) {static drafts: typeof BusinessPartnerVerification}
export class BusinessPartnerVerification_ extends Array<BusinessPartnerVerification> {static drafts: typeof BusinessPartnerVerification}

export function _BusinessPartnerAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BusinessPartner extends Base {
        BusinessPartner?: string;
        Customer?: string;
        Supplier?: string;
        AcademicTitle?: string;
        AuthorizationGroup?: string;
        BusinessPartnerCategory?: string;
        BusinessPartnerFullName?: string;
        BusinessPartnerGrouping?: string;
        BusinessPartnerName?: string;
        BusinessPartnerUUID?: string;
        CorrespondenceLanguage?: string;
        CreatedByUser?: string;
        CreationDate?: string;
        CreationTime?: string;
        FirstName?: string;
        FormOfAddress?: string;
        Industry?: string;
        InternationalLocationNumber1?: string;
        InternationalLocationNumber2?: string;
        IsFemale?: boolean;
        IsMale?: boolean;
        IsNaturalPerson?: string;
        IsSexUnknown?: boolean;
        GenderCodeName?: string;
        Language?: string;
        LastChangeDate?: string;
        LastChangeTime?: string;
        LastChangedByUser?: string;
        LastName?: string;
        LegalForm?: string;
        OrganizationBPName1?: string;
        OrganizationBPName2?: string;
        OrganizationBPName3?: string;
        OrganizationBPName4?: string;
        OrganizationFoundationDate?: string;
        OrganizationLiquidationDate?: string;
        SearchTerm1?: string;
        SearchTerm2?: string;
        AdditionalLastName?: string;
        BirthDate?: string;
        BusinessPartnerBirthDateStatus?: string;
        BusinessPartnerBirthplaceName?: string;
        BusinessPartnerIsBlocked?: boolean;
        BusinessPartnerType?: string;
        ETag?: string;
        GroupBusinessPartnerName1?: string;
        GroupBusinessPartnerName2?: string;
        IndependentAddressID?: string;
        InternationalLocationNumber3?: string;
        MiddleName?: string;
        NameCountry?: string;
        NameFormat?: string;
        PersonFullName?: string;
        PersonNumber?: string;
        IsMarkedForArchiving?: boolean;
        BusinessPartnerIDByExtSystem?: string;
        TradingPartner?: string;
        to_BuPaIdentification?: __.Association.to.many<_businesspartner.A_BuPaIdentification_>;
        to_BuPaIdentification_BusinessPartner?: string;
        to_BuPaIdentification_BPIdentificationType?: string;
        to_BuPaIdentification_BPIdentificationNumber?: string;
        to_BuPaIndustry?: __.Association.to.many<_businesspartner.A_BuPaIndustry_>;
        to_BuPaIndustry_IndustrySector?: string;
        to_BuPaIndustry_IndustrySystemType?: string;
        to_BuPaIndustry_BusinessPartner?: string;
        to_BusinessPartnerAddress?: __.Association.to.many<_businesspartner.A_BusinessPartnerAddress_>;
        to_BusinessPartnerAddress_BusinessPartner?: string;
        to_BusinessPartnerAddress_AddressID?: string;
        to_BusinessPartnerBank?: __.Association.to.many<_businesspartner.A_BusinessPartnerBank_>;
        to_BusinessPartnerBank_BusinessPartner?: string;
        to_BusinessPartnerBank_BankIdentification?: string;
        to_BusinessPartnerContact?: __.Association.to.many<_businesspartner.A_BusinessPartnerContact_>;
        to_BusinessPartnerContact_RelationshipNumber?: string;
        to_BusinessPartnerContact_BusinessPartnerCompany?: string;
        to_BusinessPartnerContact_BusinessPartnerPerson?: string;
        to_BusinessPartnerContact_ValidityEndDate?: string;
        to_BusinessPartnerRole?: __.Association.to.many<_businesspartner.A_BusinessPartnerRole_>;
        to_BusinessPartnerRole_BusinessPartner?: string;
        to_BusinessPartnerRole_BusinessPartnerRole?: string;
        to_BusinessPartnerTax?: __.Association.to.many<_businesspartner.A_BusinessPartnerTaxNumber_>;
        to_BusinessPartnerTax_BusinessPartner?: string;
        to_BusinessPartnerTax_BPTaxType?: string;
        to_Customer?: __.Association.to<_businesspartner.A_Customer>;
        to_Customer_Customer?: string;
        to_Supplier?: __.Association.to<_businesspartner.A_Supplier>;
        to_Supplier_Supplier?: string;
    static actions: {
    }
  };
}
export class BusinessPartner extends _BusinessPartnerAspect(__.Entity) {}
export class BusinessPartner_ extends Array<BusinessPartner> {}

export function _BusinessPartnerAddressAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BusinessPartnerAddress extends Base {
        BusinessPartner?: string;
        AddressID?: string;
        ValidityStartDate?: string;
        ValidityEndDate?: string;
        AuthorizationGroup?: string;
        AddressUUID?: string;
        AdditionalStreetPrefixName?: string;
        AdditionalStreetSuffixName?: string;
        AddressTimeZone?: string;
        CareOfName?: string;
        CityCode?: string;
        CityName?: string;
        CompanyPostalCode?: string;
        Country?: string;
        County?: string;
        DeliveryServiceNumber?: string;
        DeliveryServiceTypeCode?: string;
        District?: string;
        FormOfAddress?: string;
        FullName?: string;
        HomeCityName?: string;
        HouseNumber?: string;
        HouseNumberSupplementText?: string;
        Language?: string;
        POBox?: string;
        POBoxDeviatingCityName?: string;
        POBoxDeviatingCountry?: string;
        POBoxDeviatingRegion?: string;
        POBoxIsWithoutNumber?: boolean;
        POBoxLobbyName?: string;
        POBoxPostalCode?: string;
        Person?: string;
        PostalCode?: string;
        PrfrdCommMediumType?: string;
        Region?: string;
        StreetName?: string;
        StreetPrefixName?: string;
        StreetSuffixName?: string;
        TaxJurisdiction?: string;
        TransportZone?: string;
        AddressIDByExternalSystem?: string;
        CountyCode?: string;
        TownshipCode?: string;
        TownshipName?: string;
        to_AddressUsage?: __.Association.to.many<_businesspartner.A_BuPaAddressUsage_>;
        to_AddressUsage_BusinessPartner?: string;
        to_AddressUsage_ValidityEndDate?: string;
        to_AddressUsage_AddressUsage?: string;
        to_AddressUsage_AddressID?: string;
        to_EmailAddress?: __.Association.to.many<_businesspartner.A_AddressEmailAddress_>;
        to_EmailAddress_AddressID?: string;
        to_EmailAddress_Person?: string;
        to_EmailAddress_OrdinalNumber?: string;
        to_FaxNumber?: __.Association.to.many<_businesspartner.A_AddressFaxNumber_>;
        to_FaxNumber_AddressID?: string;
        to_FaxNumber_Person?: string;
        to_FaxNumber_OrdinalNumber?: string;
        to_MobilePhoneNumber?: __.Association.to.many<_businesspartner.A_AddressPhoneNumber_>;
        to_MobilePhoneNumber_AddressID?: string;
        to_MobilePhoneNumber_Person?: string;
        to_MobilePhoneNumber_OrdinalNumber?: string;
        to_PhoneNumber?: __.Association.to.many<_businesspartner.A_AddressPhoneNumber_>;
        to_PhoneNumber_AddressID?: string;
        to_PhoneNumber_Person?: string;
        to_PhoneNumber_OrdinalNumber?: string;
        to_URLAddress?: __.Association.to.many<_businesspartner.A_AddressHomePageURL_>;
        to_URLAddress_AddressID?: string;
        to_URLAddress_Person?: string;
        to_URLAddress_OrdinalNumber?: string;
        to_URLAddress_ValidityStartDate?: string;
        to_URLAddress_IsDefaultURLAddress?: boolean;
    static actions: {
    }
  };
}
export class BusinessPartnerAddress extends _BusinessPartnerAddressAspect(__.Entity) {}
export class BusinessPartnerAddresses extends Array<BusinessPartnerAddress> {}

export function _StatusValueAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class StatusValue extends Base {
        code?: string;
        value?: string;
        criticality?: number;
        updateCode?: boolean;
    static actions: {
    }
  };
}
export class StatusValue extends _StatusValueAspect(__.Entity) {}
export class StatusValues extends Array<StatusValue> {}

export function _AddressAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Address extends Base {
        verifications?: __.Association.to<_tfe_model_bpVerification.Verification>;
        verifications_ID?: string;
        AddressID?: string;
        Country?: string;
        CityName?: string;
        StreetName?: string;
        PostalCode?: string;
        HouseNumber?: string;
    static actions: {
    }
  };
}
export class Address extends _._cuidAspect(_AddressAspect(__.Entity)) {static drafts: typeof Address}
export class Addresses extends Array<Address> {static drafts: typeof Address}

// event
export class BusinessPartnerCreated {
    BusinessPartnerID: string;
}
// event
export class BusinessPartnerChanged {
    BusinessPartnerID: string;
}
// action
export declare const testFunction: { (): string, __parameters: {}, __returns: string };