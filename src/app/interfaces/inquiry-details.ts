export interface jsonData {
    timeSpent: Number;
    action: String;
    caseNo: String;
    caseDate: String;
    focusCustID: Number;
    customerName: String;
    analyst: String;
    insightSummary: String;
    view: String;
  }

export interface deogatoryJson {
    caseNo: String;
    alertScenario: String;
    originatorAccts: Number;
    originatorAccounts: Number;
    focusType: String;
    tranId: String;
    tranDate: String;
}
export interface detailsData {
    entityType: String;
    accountNo: String;
    name: String;
    address: String;
    openDate: String;
}
export interface jsonData {
    timeSpent: Number;
    action: String;
    caseNo: String;
    caseDate: String;
    focusCustID: Number;
    customerName: String;
    analyst: String;
    insightSummary: String;
    view: String;
}
export interface insightData {
    caseNo: String;
    status: String;
    description: String;
    caseDate: String;
    analyst: String;
    role: String;
    comments: String;
}
export interface transaction {
    sql: String;
    grpKey: String;
    alertScenario: String;
    originator: String;
    beneficiary: String;
    productType: String;
    numberOfTxns: Number;
    inSample: String;
    usd: String;
    localCurrency: String;
    insight: String;
}
export interface derogatory {
    sql: String;
    grpKey: String;
    alertScenario: String;
    originator: Number;
    beneficiary: String;
    productType: String;
    numberOfTxns: Number;
    inSample: String;
    usd: String;
    localCurrency: String;
    insight: String;
}
export interface insightstest {
    caseNo: String;
    date: String;
    status: String;
    scenario: String;
    counterGeoRik: String;
    noTransaction: Number;
    totalAmount: String;
    rounding: String;
}
export interface materially {
    testedTransaction: String;
    similarCharacter: String;
}

export interface testChange {

    elevatedGeoRisk: String;
    roundingCheck: String;
}
export interface testView {
    casenumber: String;
    totalAlertedamount: String;
}
export interface iqrhistory {
    quartile: String;
    amount: String;
}
export interface quartile {
    quartile: String;
    amount: String;
}