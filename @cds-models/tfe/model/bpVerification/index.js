// This is an automatically generated file. Please do not change its contents manually!
const cds = require('@sap/cds')
const csn = cds.entities('tfe.model.bpVerification')
module.exports.Verification = csn.Verifications
module.exports.Verifications = csn.Verifications
module.exports.Address = csn.Addresses
module.exports.Addresses = csn.Addresses
module.exports.Backlog = csn.Backlogs
module.exports.Backlogs = csn.Backlogs
module.exports.StatusValue = csn.StatusValues
module.exports.StatusValues = csn.StatusValues
// events
// actions
// enums
module.exports.Criticality = Object.fromEntries(Object.entries(cds.model.definitions['tfe.model.bpVerification.Criticality'].enum).map(([k,v]) => [k,v.val]))
