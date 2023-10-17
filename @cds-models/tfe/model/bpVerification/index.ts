// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../../_';
import * as _ from './../../..';
// enum
export const Criticality = {
  INFO: "INFO",
  WARNING: "WARNING",
  ERROR: "ERROR",
}
export type Criticality = "INFO" | "WARNING" | "ERROR"

export function _VerificationAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Verification extends Base {
        BusinessPartner?: string;
        FirstName?: string;
        LastName?: string;
        verificationStatus?: __.Association.to<StatusValue>;
        verificationStatus_code?: string;
        addresses?: __.Composition.of.many<Addresses>;
        addresses_ID?: string;
        BusinessPartnerIsBlocked?: boolean;
    static actions: {
    }
  };
}
export class Verification extends _._managedAspect(_._cuidAspect(_VerificationAspect(__.Entity))) {static drafts: typeof Verification}
export class Verifications extends Array<Verification> {static drafts: typeof Verification}

export function _AddressAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Address extends Base {
        verifications?: __.Association.to<Verification>;
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

export function _BacklogAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Backlog extends Base {
        method?: string;
        verification?: __.Association.to<Verification>;
        verification_ID?: string;
        updateNeeded?: boolean;
        criticality?: Criticality;
    static actions: {
    }
  };
}
export class Backlog extends _._managedAspect(_._cuidAspect(_BacklogAspect(__.Entity))) {}
export class Backlogs extends Array<Backlog> {}

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

export function _StatusValues2Aspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class StatusValues2 extends Base {
        code?: string;
        value?: string;
        criticality?: number;
        updateCode?: boolean;
    static actions: {
    }
  };
}
export class StatusValues2 extends _StatusValues2Aspect(__.Entity) {}
export class StatusValues2_ extends Array<StatusValues2> {}
