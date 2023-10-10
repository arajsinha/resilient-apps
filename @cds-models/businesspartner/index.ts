// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_';
export function _A_AddressEmailAddressAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_AddressEmailAddress extends Base {
        AddressID?: string;
        Person?: string;
        OrdinalNumber?: string;
        IsDefaultEmailAddress?: boolean;
        EmailAddress?: string;
        SearchEmailAddress?: string;
        AddressCommunicationRemarkText?: string;
    static actions: {
    }
  };
}
export class A_AddressEmailAddress extends _A_AddressEmailAddressAspect(__.Entity) {}
export class A_AddressEmailAddress_ extends Array<A_AddressEmailAddress> {}

export function _A_AddressFaxNumberAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_AddressFaxNumber extends Base {
        AddressID?: string;
        Person?: string;
        OrdinalNumber?: string;
        IsDefaultFaxNumber?: boolean;
        FaxCountry?: string;
        FaxNumber?: string;
        FaxNumberExtension?: string;
        InternationalFaxNumber?: string;
        AddressCommunicationRemarkText?: string;
    static actions: {
    }
  };
}
export class A_AddressFaxNumber extends _A_AddressFaxNumberAspect(__.Entity) {}
export class A_AddressFaxNumber_ extends Array<A_AddressFaxNumber> {}

export function _A_AddressHomePageURLAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_AddressHomePageURL extends Base {
        AddressID?: string;
        Person?: string;
        OrdinalNumber?: string;
        ValidityStartDate?: string;
        IsDefaultURLAddress?: boolean;
        SearchURLAddress?: string;
        AddressCommunicationRemarkText?: string;
        URLFieldLength?: number;
        WebsiteURL?: string;
    static actions: {
    }
  };
}
export class A_AddressHomePageURL extends _A_AddressHomePageURLAspect(__.Entity) {}
export class A_AddressHomePageURL_ extends Array<A_AddressHomePageURL> {}

export function _A_AddressPhoneNumberAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_AddressPhoneNumber extends Base {
        AddressID?: string;
        Person?: string;
        OrdinalNumber?: string;
        DestinationLocationCountry?: string;
        IsDefaultPhoneNumber?: boolean;
        PhoneNumber?: string;
        PhoneNumberExtension?: string;
        InternationalPhoneNumber?: string;
        PhoneNumberType?: string;
        AddressCommunicationRemarkText?: string;
    static actions: {
    }
  };
}
export class A_AddressPhoneNumber extends _A_AddressPhoneNumberAspect(__.Entity) {}
export class A_AddressPhoneNumber_ extends Array<A_AddressPhoneNumber> {}

export function _A_BPContactToAddressAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BPContactToAddress extends Base {
        RelationshipNumber?: string;
        BusinessPartnerCompany?: string;
        BusinessPartnerPerson?: string;
        ValidityEndDate?: string;
        AddressID?: string;
        AddressNumber?: string;
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
        to_EmailAddress?: __.Association.to.many<A_AddressEmailAddress_>;
        to_EmailAddress_AddressID?: string;
        to_EmailAddress_Person?: string;
        to_EmailAddress_OrdinalNumber?: string;
        to_FaxNumber?: __.Association.to.many<A_AddressFaxNumber_>;
        to_FaxNumber_AddressID?: string;
        to_FaxNumber_Person?: string;
        to_FaxNumber_OrdinalNumber?: string;
        to_MobilePhoneNumber?: __.Association.to.many<A_AddressPhoneNumber_>;
        to_MobilePhoneNumber_AddressID?: string;
        to_MobilePhoneNumber_Person?: string;
        to_MobilePhoneNumber_OrdinalNumber?: string;
        to_PhoneNumber?: __.Association.to.many<A_AddressPhoneNumber_>;
        to_PhoneNumber_AddressID?: string;
        to_PhoneNumber_Person?: string;
        to_PhoneNumber_OrdinalNumber?: string;
        to_URLAddress?: __.Association.to.many<A_AddressHomePageURL_>;
        to_URLAddress_AddressID?: string;
        to_URLAddress_Person?: string;
        to_URLAddress_OrdinalNumber?: string;
        to_URLAddress_ValidityStartDate?: string;
        to_URLAddress_IsDefaultURLAddress?: boolean;
    static actions: {
    }
  };
}
export class A_BPContactToAddress extends _A_BPContactToAddressAspect(__.Entity) {}
export class A_BPContactToAddress_ extends Array<A_BPContactToAddress> {}

export function _A_BPContactToFuncAndDeptAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BPContactToFuncAndDept extends Base {
        RelationshipNumber?: string;
        BusinessPartnerCompany?: string;
        BusinessPartnerPerson?: string;
        ValidityEndDate?: string;
        ContactPersonFunction?: string;
        ContactPersonDepartment?: string;
        PhoneNumber?: string;
        PhoneNumberExtension?: string;
        FaxNumber?: string;
        FaxNumberExtension?: string;
        EmailAddress?: string;
        RelationshipCategory?: string;
    static actions: {
    }
  };
}
export class A_BPContactToFuncAndDept extends _A_BPContactToFuncAndDeptAspect(__.Entity) {}
export class A_BPContactToFuncAndDept_ extends Array<A_BPContactToFuncAndDept> {}

export function _A_BuPaAddressUsageAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BuPaAddressUsage extends Base {
        BusinessPartner?: string;
        ValidityEndDate?: string;
        AddressUsage?: string;
        AddressID?: string;
        ValidityStartDate?: string;
        StandardUsage?: boolean;
        AuthorizationGroup?: string;
    static actions: {
    }
  };
}
export class A_BuPaAddressUsage extends _A_BuPaAddressUsageAspect(__.Entity) {}
export class A_BuPaAddressUsage_ extends Array<A_BuPaAddressUsage> {}

export function _A_BuPaIdentificationAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BuPaIdentification extends Base {
        BusinessPartner?: string;
        BPIdentificationType?: string;
        BPIdentificationNumber?: string;
        BPIdnNmbrIssuingInstitute?: string;
        BPIdentificationEntryDate?: string;
        Country?: string;
        Region?: string;
        ValidityStartDate?: string;
        ValidityEndDate?: string;
        AuthorizationGroup?: string;
    static actions: {
    }
  };
}
export class A_BuPaIdentification extends _A_BuPaIdentificationAspect(__.Entity) {}
export class A_BuPaIdentification_ extends Array<A_BuPaIdentification> {}

export function _A_BuPaIndustryAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BuPaIndustry extends Base {
        IndustrySector?: string;
        IndustrySystemType?: string;
        BusinessPartner?: string;
        IsStandardIndustry?: string;
        IndustryKeyDescription?: string;
    static actions: {
    }
  };
}
export class A_BuPaIndustry extends _A_BuPaIndustryAspect(__.Entity) {}
export class A_BuPaIndustry_ extends Array<A_BuPaIndustry> {}

export function _A_BusinessPartnerAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BusinessPartner extends Base {
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
        to_BuPaIdentification?: __.Association.to.many<A_BuPaIdentification_>;
        to_BuPaIdentification_BusinessPartner?: string;
        to_BuPaIdentification_BPIdentificationType?: string;
        to_BuPaIdentification_BPIdentificationNumber?: string;
        to_BuPaIndustry?: __.Association.to.many<A_BuPaIndustry_>;
        to_BuPaIndustry_IndustrySector?: string;
        to_BuPaIndustry_IndustrySystemType?: string;
        to_BuPaIndustry_BusinessPartner?: string;
        to_BusinessPartnerAddress?: __.Association.to.many<A_BusinessPartnerAddress_>;
        to_BusinessPartnerAddress_BusinessPartner?: string;
        to_BusinessPartnerAddress_AddressID?: string;
        to_BusinessPartnerBank?: __.Association.to.many<A_BusinessPartnerBank_>;
        to_BusinessPartnerBank_BusinessPartner?: string;
        to_BusinessPartnerBank_BankIdentification?: string;
        to_BusinessPartnerContact?: __.Association.to.many<A_BusinessPartnerContact_>;
        to_BusinessPartnerContact_RelationshipNumber?: string;
        to_BusinessPartnerContact_BusinessPartnerCompany?: string;
        to_BusinessPartnerContact_BusinessPartnerPerson?: string;
        to_BusinessPartnerContact_ValidityEndDate?: string;
        to_BusinessPartnerRole?: __.Association.to.many<A_BusinessPartnerRole_>;
        to_BusinessPartnerRole_BusinessPartner?: string;
        to_BusinessPartnerRole_BusinessPartnerRole?: string;
        to_BusinessPartnerTax?: __.Association.to.many<A_BusinessPartnerTaxNumber_>;
        to_BusinessPartnerTax_BusinessPartner?: string;
        to_BusinessPartnerTax_BPTaxType?: string;
        to_Customer?: __.Association.to<A_Customer>;
        to_Customer_Customer?: string;
        to_Supplier?: __.Association.to<A_Supplier>;
        to_Supplier_Supplier?: string;
    static actions: {
    }
  };
}
export class A_BusinessPartner extends _A_BusinessPartnerAspect(__.Entity) {}
export class A_BusinessPartner_ extends Array<A_BusinessPartner> {}

export function _A_BusinessPartnerAddressAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BusinessPartnerAddress extends Base {
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
        to_AddressUsage?: __.Association.to.many<A_BuPaAddressUsage_>;
        to_AddressUsage_BusinessPartner?: string;
        to_AddressUsage_ValidityEndDate?: string;
        to_AddressUsage_AddressUsage?: string;
        to_AddressUsage_AddressID?: string;
        to_EmailAddress?: __.Association.to.many<A_AddressEmailAddress_>;
        to_EmailAddress_AddressID?: string;
        to_EmailAddress_Person?: string;
        to_EmailAddress_OrdinalNumber?: string;
        to_FaxNumber?: __.Association.to.many<A_AddressFaxNumber_>;
        to_FaxNumber_AddressID?: string;
        to_FaxNumber_Person?: string;
        to_FaxNumber_OrdinalNumber?: string;
        to_MobilePhoneNumber?: __.Association.to.many<A_AddressPhoneNumber_>;
        to_MobilePhoneNumber_AddressID?: string;
        to_MobilePhoneNumber_Person?: string;
        to_MobilePhoneNumber_OrdinalNumber?: string;
        to_PhoneNumber?: __.Association.to.many<A_AddressPhoneNumber_>;
        to_PhoneNumber_AddressID?: string;
        to_PhoneNumber_Person?: string;
        to_PhoneNumber_OrdinalNumber?: string;
        to_URLAddress?: __.Association.to.many<A_AddressHomePageURL_>;
        to_URLAddress_AddressID?: string;
        to_URLAddress_Person?: string;
        to_URLAddress_OrdinalNumber?: string;
        to_URLAddress_ValidityStartDate?: string;
        to_URLAddress_IsDefaultURLAddress?: boolean;
    static actions: {
    }
  };
}
export class A_BusinessPartnerAddress extends _A_BusinessPartnerAddressAspect(__.Entity) {}
export class A_BusinessPartnerAddress_ extends Array<A_BusinessPartnerAddress> {}

export function _A_BusinessPartnerBankAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BusinessPartnerBank extends Base {
        BusinessPartner?: string;
        BankIdentification?: string;
        BankCountryKey?: string;
        BankName?: string;
        BankNumber?: string;
        SWIFTCode?: string;
        BankControlKey?: string;
        BankAccountHolderName?: string;
        BankAccountName?: string;
        ValidityStartDate?: string;
        ValidityEndDate?: string;
        IBAN?: string;
        IBANValidityStartDate?: string;
        BankAccount?: string;
        BankAccountReferenceText?: string;
        CollectionAuthInd?: boolean;
        CityName?: string;
        AuthorizationGroup?: string;
    static actions: {
    }
  };
}
export class A_BusinessPartnerBank extends _A_BusinessPartnerBankAspect(__.Entity) {}
export class A_BusinessPartnerBank_ extends Array<A_BusinessPartnerBank> {}

export function _A_BusinessPartnerContactAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BusinessPartnerContact extends Base {
        RelationshipNumber?: string;
        BusinessPartnerCompany?: string;
        BusinessPartnerPerson?: string;
        ValidityEndDate?: string;
        ValidityStartDate?: string;
        IsStandardRelationship?: boolean;
        RelationshipCategory?: string;
        to_ContactAddress?: __.Association.to.many<A_BPContactToAddress_>;
        to_ContactAddress_RelationshipNumber?: string;
        to_ContactAddress_BusinessPartnerCompany?: string;
        to_ContactAddress_BusinessPartnerPerson?: string;
        to_ContactAddress_ValidityEndDate?: string;
        to_ContactAddress_AddressID?: string;
        to_ContactRelationship?: __.Association.to<A_BPContactToFuncAndDept>;
        to_ContactRelationship_RelationshipNumber?: string;
        to_ContactRelationship_BusinessPartnerCompany?: string;
        to_ContactRelationship_BusinessPartnerPerson?: string;
        to_ContactRelationship_ValidityEndDate?: string;
    static actions: {
    }
  };
}
export class A_BusinessPartnerContact extends _A_BusinessPartnerContactAspect(__.Entity) {}
export class A_BusinessPartnerContact_ extends Array<A_BusinessPartnerContact> {}

export function _A_BusinessPartnerRoleAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BusinessPartnerRole extends Base {
        BusinessPartner?: string;
        BusinessPartnerRole?: string;
        ValidFrom?: string;
        ValidTo?: string;
        AuthorizationGroup?: string;
    static actions: {
    }
  };
}
export class A_BusinessPartnerRole extends _A_BusinessPartnerRoleAspect(__.Entity) {}
export class A_BusinessPartnerRole_ extends Array<A_BusinessPartnerRole> {}

export function _A_BusinessPartnerTaxNumberAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BusinessPartnerTaxNumber extends Base {
        BusinessPartner?: string;
        BPTaxType?: string;
        BPTaxNumber?: string;
        BPTaxLongNumber?: string;
        AuthorizationGroup?: string;
    static actions: {
    }
  };
}
export class A_BusinessPartnerTaxNumber extends _A_BusinessPartnerTaxNumberAspect(__.Entity) {}
export class A_BusinessPartnerTaxNumber_ extends Array<A_BusinessPartnerTaxNumber> {}

export function _A_CustomerAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_Customer extends Base {
        Customer?: string;
        AuthorizationGroup?: string;
        BillingIsBlockedForCustomer?: string;
        CreatedByUser?: string;
        CreationDate?: string;
        CustomerAccountGroup?: string;
        CustomerClassification?: string;
        CustomerFullName?: string;
        CustomerName?: string;
        DeliveryIsBlocked?: string;
        NFPartnerIsNaturalPerson?: string;
        OrderIsBlockedForCustomer?: string;
        PostingIsBlocked?: boolean;
        Supplier?: string;
        CustomerCorporateGroup?: string;
        FiscalAddress?: string;
        Industry?: string;
        IndustryCode1?: string;
        IndustryCode2?: string;
        IndustryCode3?: string;
        IndustryCode4?: string;
        IndustryCode5?: string;
        InternationalLocationNumber1?: string;
        NielsenRegion?: string;
        ResponsibleType?: string;
        TaxNumber1?: string;
        TaxNumber2?: string;
        TaxNumber3?: string;
        TaxNumber4?: string;
        TaxNumber5?: string;
        TaxNumberType?: string;
        VATRegistration?: string;
        DeletionIndicator?: boolean;
        to_CustomerCompany?: __.Association.to.many<A_CustomerCompany_>;
        to_CustomerCompany_Customer?: string;
        to_CustomerCompany_CompanyCode?: string;
        to_CustomerSalesArea?: __.Association.to.many<A_CustomerSalesArea_>;
        to_CustomerSalesArea_Customer?: string;
        to_CustomerSalesArea_SalesOrganization?: string;
        to_CustomerSalesArea_DistributionChannel?: string;
        to_CustomerSalesArea_Division?: string;
        to_CustomerTaxGrouping?: __.Association.to.many<A_CustomerTaxGrouping_>;
        to_CustomerTaxGrouping_Customer?: string;
        to_CustomerTaxGrouping_CustomerTaxGroupingCode?: string;
        to_CustomerText?: __.Association.to.many<A_CustomerText_>;
        to_CustomerText_Customer?: string;
        to_CustomerText_Language?: string;
        to_CustomerText_LongTextID?: string;
    static actions: {
    }
  };
}
export class A_Customer extends _A_CustomerAspect(__.Entity) {}
export class A_Customer_ extends Array<A_Customer> {}

export function _A_CustomerCompanyAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerCompany extends Base {
        Customer?: string;
        CompanyCode?: string;
        APARToleranceGroup?: string;
        AccountByCustomer?: string;
        AccountingClerk?: string;
        AccountingClerkFaxNumber?: string;
        AccountingClerkInternetAddress?: string;
        AccountingClerkPhoneNumber?: string;
        AlternativePayerAccount?: string;
        AuthorizationGroup?: string;
        CollectiveInvoiceVariant?: string;
        CustomerAccountNote?: string;
        CustomerHeadOffice?: string;
        CustomerSupplierClearingIsUsed?: boolean;
        HouseBank?: string;
        InterestCalculationCode?: string;
        InterestCalculationDate?: string;
        IntrstCalcFrequencyInMonths?: string;
        IsToBeLocallyProcessed?: boolean;
        ItemIsToBePaidSeparately?: boolean;
        LayoutSortingRule?: string;
        PaymentBlockingReason?: string;
        PaymentMethodsList?: string;
        PaymentTerms?: string;
        PaytAdviceIsSentbyEDI?: boolean;
        PhysicalInventoryBlockInd?: boolean;
        ReconciliationAccount?: string;
        RecordPaymentHistoryIndicator?: boolean;
        UserAtCustomer?: string;
        DeletionIndicator?: boolean;
        CashPlanningGroup?: string;
        KnownOrNegotiatedLeave?: string;
        ValueAdjustmentKey?: string;
        CustomerAccountGroup?: string;
        to_CompanyText?: __.Association.to.many<A_CustomerCompanyText_>;
        to_CompanyText_Customer?: string;
        to_CompanyText_CompanyCode?: string;
        to_CompanyText_Language?: string;
        to_CompanyText_LongTextID?: string;
        to_CustomerDunning?: __.Association.to.many<A_CustomerDunning_>;
        to_CustomerDunning_Customer?: string;
        to_CustomerDunning_CompanyCode?: string;
        to_CustomerDunning_DunningArea?: string;
        to_WithHoldingTax?: __.Association.to.many<A_CustomerWithHoldingTax_>;
        to_WithHoldingTax_Customer?: string;
        to_WithHoldingTax_CompanyCode?: string;
        to_WithHoldingTax_WithholdingTaxType?: string;
    static actions: {
    }
  };
}
export class A_CustomerCompany extends _A_CustomerCompanyAspect(__.Entity) {}
export class A_CustomerCompany_ extends Array<A_CustomerCompany> {}

export function _A_CustomerCompanyTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerCompanyText extends Base {
        Customer?: string;
        CompanyCode?: string;
        Language?: string;
        LongTextID?: string;
        LongText?: string;
    static actions: {
    }
  };
}
export class A_CustomerCompanyText extends _A_CustomerCompanyTextAspect(__.Entity) {}
export class A_CustomerCompanyText_ extends Array<A_CustomerCompanyText> {}

export function _A_CustomerDunningAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerDunning extends Base {
        Customer?: string;
        CompanyCode?: string;
        DunningArea?: string;
        DunningBlock?: string;
        DunningLevel?: string;
        DunningProcedure?: string;
        DunningRecipient?: string;
        LastDunnedOn?: string;
        LegDunningProcedureOn?: string;
        DunningClerk?: string;
        AuthorizationGroup?: string;
        CustomerAccountGroup?: string;
    static actions: {
    }
  };
}
export class A_CustomerDunning extends _A_CustomerDunningAspect(__.Entity) {}
export class A_CustomerDunning_ extends Array<A_CustomerDunning> {}

export function _A_CustomerSalesAreaAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerSalesArea extends Base {
        Customer?: string;
        SalesOrganization?: string;
        DistributionChannel?: string;
        Division?: string;
        AccountByCustomer?: string;
        AuthorizationGroup?: string;
        BillingIsBlockedForCustomer?: string;
        CompleteDeliveryIsDefined?: boolean;
        Currency?: string;
        CustomerABCClassification?: string;
        CustomerAccountAssignmentGroup?: string;
        CustomerGroup?: string;
        CustomerPaymentTerms?: string;
        CustomerPriceGroup?: string;
        CustomerPricingProcedure?: string;
        DeliveryIsBlockedForCustomer?: string;
        DeliveryPriority?: string;
        IncotermsClassification?: string;
        IncotermsLocation2?: string;
        IncotermsVersion?: string;
        IncotermsLocation1?: string;
        DeletionIndicator?: boolean;
        IncotermsTransferLocation?: string;
        InvoiceDate?: string;
        ItemOrderProbabilityInPercent?: string;
        OrderCombinationIsAllowed?: boolean;
        OrderIsBlockedForCustomer?: string;
        PartialDeliveryIsAllowed?: string;
        PriceListType?: string;
        SalesGroup?: string;
        SalesOffice?: string;
        ShippingCondition?: string;
        SupplyingPlant?: string;
        SalesDistrict?: string;
        InvoiceListSchedule?: string;
        ExchangeRateType?: string;
        AdditionalCustomerGroup1?: string;
        AdditionalCustomerGroup2?: string;
        AdditionalCustomerGroup3?: string;
        AdditionalCustomerGroup4?: string;
        AdditionalCustomerGroup5?: string;
        PaymentGuaranteeProcedure?: string;
        CustomerAccountGroup?: string;
        to_PartnerFunction?: __.Association.to.many<A_CustSalesPartnerFunc_>;
        to_PartnerFunction_Customer?: string;
        to_PartnerFunction_SalesOrganization?: string;
        to_PartnerFunction_DistributionChannel?: string;
        to_PartnerFunction_Division?: string;
        to_PartnerFunction_PartnerCounter?: string;
        to_PartnerFunction_PartnerFunction?: string;
        to_SalesAreaTax?: __.Association.to.many<A_CustomerSalesAreaTax_>;
        to_SalesAreaTax_Customer?: string;
        to_SalesAreaTax_SalesOrganization?: string;
        to_SalesAreaTax_DistributionChannel?: string;
        to_SalesAreaTax_Division?: string;
        to_SalesAreaTax_DepartureCountry?: string;
        to_SalesAreaTax_CustomerTaxCategory?: string;
        to_SalesAreaText?: __.Association.to.many<A_CustomerSalesAreaText_>;
        to_SalesAreaText_Customer?: string;
        to_SalesAreaText_SalesOrganization?: string;
        to_SalesAreaText_DistributionChannel?: string;
        to_SalesAreaText_Division?: string;
        to_SalesAreaText_Language?: string;
        to_SalesAreaText_LongTextID?: string;
    static actions: {
    }
  };
}
export class A_CustomerSalesArea extends _A_CustomerSalesAreaAspect(__.Entity) {}
export class A_CustomerSalesArea_ extends Array<A_CustomerSalesArea> {}

export function _A_CustomerSalesAreaTaxAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerSalesAreaTax extends Base {
        Customer?: string;
        SalesOrganization?: string;
        DistributionChannel?: string;
        Division?: string;
        DepartureCountry?: string;
        CustomerTaxCategory?: string;
        CustomerTaxClassification?: string;
    static actions: {
    }
  };
}
export class A_CustomerSalesAreaTax extends _A_CustomerSalesAreaTaxAspect(__.Entity) {}
export class A_CustomerSalesAreaTax_ extends Array<A_CustomerSalesAreaTax> {}

export function _A_CustomerSalesAreaTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerSalesAreaText extends Base {
        Customer?: string;
        SalesOrganization?: string;
        DistributionChannel?: string;
        Division?: string;
        Language?: string;
        LongTextID?: string;
        LongText?: string;
    static actions: {
    }
  };
}
export class A_CustomerSalesAreaText extends _A_CustomerSalesAreaTextAspect(__.Entity) {}
export class A_CustomerSalesAreaText_ extends Array<A_CustomerSalesAreaText> {}

export function _A_CustomerTaxGroupingAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerTaxGrouping extends Base {
        Customer?: string;
        CustomerTaxGroupingCode?: string;
        CustTaxGrpExemptionCertificate?: string;
        CustTaxGroupExemptionRate?: number;
        CustTaxGroupExemptionStartDate?: string;
        CustTaxGroupExemptionEndDate?: string;
        CustTaxGroupSubjectedStartDate?: string;
        CustTaxGroupSubjectedEndDate?: string;
    static actions: {
    }
  };
}
export class A_CustomerTaxGrouping extends _A_CustomerTaxGroupingAspect(__.Entity) {}
export class A_CustomerTaxGrouping_ extends Array<A_CustomerTaxGrouping> {}

export function _A_CustomerTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerText extends Base {
        Customer?: string;
        Language?: string;
        LongTextID?: string;
        LongText?: string;
    static actions: {
    }
  };
}
export class A_CustomerText extends _A_CustomerTextAspect(__.Entity) {}
export class A_CustomerText_ extends Array<A_CustomerText> {}

export function _A_CustomerWithHoldingTaxAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerWithHoldingTax extends Base {
        Customer?: string;
        CompanyCode?: string;
        WithholdingTaxType?: string;
        WithholdingTaxCode?: string;
        WithholdingTaxAgent?: boolean;
        ObligationDateBegin?: string;
        ObligationDateEnd?: string;
        WithholdingTaxNumber?: string;
        WithholdingTaxCertificate?: string;
        WithholdingTaxExmptPercent?: number;
        ExemptionDateBegin?: string;
        ExemptionDateEnd?: string;
        ExemptionReason?: string;
        AuthorizationGroup?: string;
    static actions: {
    }
  };
}
export class A_CustomerWithHoldingTax extends _A_CustomerWithHoldingTaxAspect(__.Entity) {}
export class A_CustomerWithHoldingTax_ extends Array<A_CustomerWithHoldingTax> {}

export function _A_CustSalesPartnerFuncAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustSalesPartnerFunc extends Base {
        Customer?: string;
        SalesOrganization?: string;
        DistributionChannel?: string;
        Division?: string;
        PartnerCounter?: string;
        PartnerFunction?: string;
        BPCustomerNumber?: string;
        CustomerPartnerDescription?: string;
        DefaultPartner?: boolean;
        Supplier?: string;
        PersonnelNumber?: string;
        ContactPerson?: string;
        AuthorizationGroup?: string;
    static actions: {
    }
  };
}
export class A_CustSalesPartnerFunc extends _A_CustSalesPartnerFuncAspect(__.Entity) {}
export class A_CustSalesPartnerFunc_ extends Array<A_CustSalesPartnerFunc> {}

export function _A_SupplierAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_Supplier extends Base {
        Supplier?: string;
        AlternativePayeeAccountNumber?: string;
        AuthorizationGroup?: string;
        CreatedByUser?: string;
        CreationDate?: string;
        Customer?: string;
        PaymentIsBlockedForSupplier?: boolean;
        PostingIsBlocked?: boolean;
        PurchasingIsBlocked?: boolean;
        SupplierAccountGroup?: string;
        SupplierFullName?: string;
        SupplierName?: string;
        VATRegistration?: string;
        BirthDate?: string;
        ConcatenatedInternationalLocNo?: string;
        DeletionIndicator?: boolean;
        FiscalAddress?: string;
        Industry?: string;
        InternationalLocationNumber1?: string;
        InternationalLocationNumber2?: string;
        InternationalLocationNumber3?: string;
        IsNaturalPerson?: string;
        ResponsibleType?: string;
        SuplrQltyInProcmtCertfnValidTo?: string;
        SuplrQualityManagementSystem?: string;
        SupplierCorporateGroup?: string;
        SupplierProcurementBlock?: string;
        TaxNumber1?: string;
        TaxNumber2?: string;
        TaxNumber3?: string;
        TaxNumber4?: string;
        TaxNumber5?: string;
        TaxNumberResponsible?: string;
        TaxNumberType?: string;
        SuplrProofOfDelivRlvtCode?: string;
        BR_TaxIsSplit?: boolean;
        to_SupplierCompany?: __.Association.to.many<A_SupplierCompany_>;
        to_SupplierCompany_Supplier?: string;
        to_SupplierCompany_CompanyCode?: string;
        to_SupplierPurchasingOrg?: __.Association.to.many<A_SupplierPurchasingOrg_>;
        to_SupplierPurchasingOrg_Supplier?: string;
        to_SupplierPurchasingOrg_PurchasingOrganization?: string;
        to_SupplierText?: __.Association.to.many<A_SupplierText_>;
        to_SupplierText_Supplier?: string;
        to_SupplierText_Language?: string;
        to_SupplierText_LongTextID?: string;
    static actions: {
    }
  };
}
export class A_Supplier extends _A_SupplierAspect(__.Entity) {}
export class A_Supplier_ extends Array<A_Supplier> {}

export function _A_SupplierCompanyAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_SupplierCompany extends Base {
        Supplier?: string;
        CompanyCode?: string;
        AuthorizationGroup?: string;
        CompanyCodeName?: string;
        PaymentBlockingReason?: string;
        SupplierIsBlockedForPosting?: boolean;
        AccountingClerk?: string;
        AccountingClerkFaxNumber?: string;
        AccountingClerkPhoneNumber?: string;
        SupplierClerk?: string;
        SupplierClerkURL?: string;
        PaymentMethodsList?: string;
        PaymentTerms?: string;
        ClearCustomerSupplier?: boolean;
        IsToBeLocallyProcessed?: boolean;
        ItemIsToBePaidSeparately?: boolean;
        PaymentIsToBeSentByEDI?: boolean;
        HouseBank?: string;
        CheckPaidDurationInDays?: number;
        Currency?: string;
        BillOfExchLmtAmtInCoCodeCrcy?: number;
        SupplierClerkIDBySupplier?: string;
        ReconciliationAccount?: string;
        InterestCalculationCode?: string;
        InterestCalculationDate?: string;
        IntrstCalcFrequencyInMonths?: string;
        SupplierHeadOffice?: string;
        AlternativePayee?: string;
        LayoutSortingRule?: string;
        APARToleranceGroup?: string;
        SupplierCertificationDate?: string;
        SupplierAccountNote?: string;
        WithholdingTaxCountry?: string;
        DeletionIndicator?: boolean;
        CashPlanningGroup?: string;
        IsToBeCheckedForDuplicates?: boolean;
        MinorityGroup?: string;
        SupplierAccountGroup?: string;
        to_CompanyText?: __.Association.to.many<A_SupplierCompanyText_>;
        to_CompanyText_Supplier?: string;
        to_CompanyText_CompanyCode?: string;
        to_CompanyText_Language?: string;
        to_CompanyText_LongTextID?: string;
        to_Supplier?: __.Association.to<A_Supplier>;
        to_Supplier_Supplier?: string;
        to_SupplierDunning?: __.Association.to.many<A_SupplierDunning_>;
        to_SupplierDunning_Supplier?: string;
        to_SupplierDunning_CompanyCode?: string;
        to_SupplierDunning_DunningArea?: string;
        to_SupplierWithHoldingTax?: __.Association.to.many<A_SupplierWithHoldingTax_>;
        to_SupplierWithHoldingTax_Supplier?: string;
        to_SupplierWithHoldingTax_CompanyCode?: string;
        to_SupplierWithHoldingTax_WithholdingTaxType?: string;
    static actions: {
    }
  };
}
export class A_SupplierCompany extends _A_SupplierCompanyAspect(__.Entity) {}
export class A_SupplierCompany_ extends Array<A_SupplierCompany> {}

export function _A_SupplierCompanyTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_SupplierCompanyText extends Base {
        Supplier?: string;
        CompanyCode?: string;
        Language?: string;
        LongTextID?: string;
        LongText?: string;
    static actions: {
    }
  };
}
export class A_SupplierCompanyText extends _A_SupplierCompanyTextAspect(__.Entity) {}
export class A_SupplierCompanyText_ extends Array<A_SupplierCompanyText> {}

export function _A_SupplierDunningAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_SupplierDunning extends Base {
        Supplier?: string;
        CompanyCode?: string;
        DunningArea?: string;
        DunningBlock?: string;
        DunningLevel?: string;
        DunningProcedure?: string;
        DunningRecipient?: string;
        LastDunnedOn?: string;
        LegDunningProcedureOn?: string;
        DunningClerk?: string;
        AuthorizationGroup?: string;
        SupplierAccountGroup?: string;
    static actions: {
    }
  };
}
export class A_SupplierDunning extends _A_SupplierDunningAspect(__.Entity) {}
export class A_SupplierDunning_ extends Array<A_SupplierDunning> {}

export function _A_SupplierPartnerFuncAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_SupplierPartnerFunc extends Base {
        Supplier?: string;
        PurchasingOrganization?: string;
        SupplierSubrange?: string;
        Plant?: string;
        PartnerFunction?: string;
        PartnerCounter?: string;
        DefaultPartner?: boolean;
        CreationDate?: string;
        CreatedByUser?: string;
        ReferenceSupplier?: string;
        AuthorizationGroup?: string;
    static actions: {
    }
  };
}
export class A_SupplierPartnerFunc extends _A_SupplierPartnerFuncAspect(__.Entity) {}
export class A_SupplierPartnerFunc_ extends Array<A_SupplierPartnerFunc> {}

export function _A_SupplierPurchasingOrgAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_SupplierPurchasingOrg extends Base {
        Supplier?: string;
        PurchasingOrganization?: string;
        CalculationSchemaGroupCode?: string;
        DeletionIndicator?: boolean;
        IncotermsClassification?: string;
        IncotermsTransferLocation?: string;
        IncotermsVersion?: string;
        IncotermsLocation1?: string;
        IncotermsLocation2?: string;
        InvoiceIsGoodsReceiptBased?: boolean;
        MaterialPlannedDeliveryDurn?: number;
        MinimumOrderAmount?: number;
        PaymentTerms?: string;
        PricingDateControl?: string;
        PurOrdAutoGenerationIsAllowed?: boolean;
        PurchaseOrderCurrency?: string;
        PurchasingGroup?: string;
        PurchasingIsBlockedForSupplier?: boolean;
        ShippingCondition?: string;
        SupplierABCClassificationCode?: string;
        SupplierPhoneNumber?: string;
        SupplierRespSalesPersonName?: string;
        SupplierConfirmationControlKey?: string;
        IsOrderAcknRqd?: boolean;
        AuthorizationGroup?: string;
        SupplierAccountGroup?: string;
        to_PartnerFunction?: __.Association.to.many<A_SupplierPartnerFunc_>;
        to_PartnerFunction_Supplier?: string;
        to_PartnerFunction_PurchasingOrganization?: string;
        to_PartnerFunction_SupplierSubrange?: string;
        to_PartnerFunction_Plant?: string;
        to_PartnerFunction_PartnerFunction?: string;
        to_PartnerFunction_PartnerCounter?: string;
        to_PurchasingOrgText?: __.Association.to.many<A_SupplierPurchasingOrgText_>;
        to_PurchasingOrgText_Supplier?: string;
        to_PurchasingOrgText_PurchasingOrganization?: string;
        to_PurchasingOrgText_Language?: string;
        to_PurchasingOrgText_LongTextID?: string;
    static actions: {
    }
  };
}
export class A_SupplierPurchasingOrg extends _A_SupplierPurchasingOrgAspect(__.Entity) {}
export class A_SupplierPurchasingOrg_ extends Array<A_SupplierPurchasingOrg> {}

export function _A_SupplierPurchasingOrgTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_SupplierPurchasingOrgText extends Base {
        Supplier?: string;
        PurchasingOrganization?: string;
        Language?: string;
        LongTextID?: string;
        LongText?: string;
    static actions: {
    }
  };
}
export class A_SupplierPurchasingOrgText extends _A_SupplierPurchasingOrgTextAspect(__.Entity) {}
export class A_SupplierPurchasingOrgText_ extends Array<A_SupplierPurchasingOrgText> {}

export function _A_SupplierTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_SupplierText extends Base {
        Supplier?: string;
        Language?: string;
        LongTextID?: string;
        LongText?: string;
    static actions: {
    }
  };
}
export class A_SupplierText extends _A_SupplierTextAspect(__.Entity) {}
export class A_SupplierText_ extends Array<A_SupplierText> {}

export function _A_SupplierWithHoldingTaxAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_SupplierWithHoldingTax extends Base {
        Supplier?: string;
        CompanyCode?: string;
        WithholdingTaxType?: string;
        ExemptionDateBegin?: string;
        ExemptionDateEnd?: string;
        ExemptionReason?: string;
        IsWithholdingTaxSubject?: boolean;
        RecipientType?: string;
        WithholdingTaxCertificate?: string;
        WithholdingTaxCode?: string;
        WithholdingTaxExmptPercent?: number;
        WithholdingTaxNumber?: string;
        AuthorizationGroup?: string;
    static actions: {
    }
  };
}
export class A_SupplierWithHoldingTax extends _A_SupplierWithHoldingTaxAspect(__.Entity) {}
export class A_SupplierWithHoldingTax_ extends Array<A_SupplierWithHoldingTax> {}
