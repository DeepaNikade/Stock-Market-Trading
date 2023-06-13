import Joi from "joi";

// Account Master

// B - Bank, P - Party, C - Cash , S - Supplier, I - Income, E - Expensis

export const insertAccountMasterReq = Joi.object({
  accountName: Joi.string().required(),
  accountType: Joi.string().valid("B", "P", "C", "S", "I", "E").required(),
  address: Joi.string().optional(),
  cityCode: Joi.number().optional(),
  groupId: Joi.number().required(),
  openingBalance: Joi.number().optional(),
  drcr: Joi.string().valid("D", "C").optional(),
  unregisted: Joi.string().valid().optional(),
  gstNo: Joi.string().optional(),
  fssaiNo: Joi.string().optional(),
  stateCode: Joi.string().valid().optional(),
  bankAccountCode: Joi.string().optional(),
  bankName: Joi.string().optional(),
  branch: Joi.string().optional(),
  ifsc: Joi.string().optional(),
  whatsappNo: Joi.string().optional(),
  tdstcsApplicable: Joi.string().valid().optional(),
  locked: Joi.string().valid().optional(),
  email: Joi.string().optional(),
  ccEmail: Joi.string().optional(),
  mobileNo: Joi.string().optional(),
  tanNo: Joi.string().optional(),
  companyCode: Joi.number().required(),
  createdBy: Joi.number().required(),
  modifiedBy: Joi.number().optional(),
});

export const deleteAccountMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const updateAccountMasterReq = Joi.object({
  id: Joi.number().required(),
  accountName: Joi.string().required(),
  accountType: Joi.string().valid("B", "P", "C", "S", "I", "E").required(),
  address: Joi.string().optional(),
  cityCode: Joi.number().optional(),
  groupId: Joi.number().required(),
  openingBalance: Joi.number().optional(),
  drcr: Joi.string().valid("D", "C").optional(),
  unregisted: Joi.string().valid().optional(),
  gstNo: Joi.string().optional(),
  fssaiNo: Joi.string().optional(),
  stateCode: Joi.string().valid().optional(),
  bankAccountCode: Joi.string().optional(),
  bankName: Joi.string().optional(),
  branch: Joi.string().optional(),
  ifsc: Joi.string().optional(),
  whatsappNo: Joi.string().optional(),
  tdstcsApplicable: Joi.string().valid().optional(),
  locked: Joi.string().valid().optional(),
  email: Joi.string().optional(),
  ccEmail: Joi.string().optional(),
  mobileNo: Joi.string().optional(),
  tanNo: Joi.string().optional(),
  companyCode: Joi.number().required(),
  modifiedBy: Joi.number().required(),
});

export const getAccountMasterReq = Joi.object({
  id: Joi.number().required(),
});

// Company

export const insertCompanyReq = Joi.object({
  companyName: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  mobile: Joi.string().optional(),
  gstNo: Joi.string().optional(),
  panNo: Joi.string().optional(),
  fssaiNo: Joi.string().optional(),
  signPath: Joi.string().optional(),
  logoPath: Joi.string().optional(),
  stateCode: Joi.string().required(),
  createdBy: Joi.number().required(),
  modifiedBy: Joi.number().optional(),
});

export const deleteCompanyReq = Joi.object({
  id: Joi.number().required(),
});

export const updateCompanyReq = Joi.object({
  id: Joi.number().required(),
  companyName: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  mobile: Joi.string().optional(),
  gstNo: Joi.string().optional(),
  panNo: Joi.string().optional(),
  fssaiNo: Joi.string().optional(),
  signPath: Joi.string().optional(),
  logoPath: Joi.string().optional(),
  stateCode: Joi.string().required(),
  modifiedBy: Joi.number().required(),
});

export const getCompanyReq = Joi.object({
  id: Joi.number().required(),
});

// Equity Sale Purchase

// D - Debit, C - Credit

export const insertEquitySalePurchaseReq = Joi.object({
  billNo: Joi.string().required(),
  billDate: Joi.date().required(),
  transactionType: Joi.string().valid("P", "S").required(),
  scriptId: Joi.number().required(),
  purchaseId: Joi.number().optional(),
  quantity: Joi.number().required(),
  bonus: Joi.number().required(),
  value: Joi.number().required(),
  accountId: Joi.number().required(),
  brokage: Joi.number().required(),
  cess: Joi.number().required(),
  stt: Joi.number().required(),
  serviceTax: Joi.number().required(),
  stampDuty: Joi.number().required(),
  turnoverTax: Joi.number().required(),
  netValue: Joi.number().required(),
  netRate: Joi.number().required(),
  companyCode: Joi.number().required(),
  createdBy: Joi.number().required(),
  modifiedBy: Joi.number().optional(),
});

export const deleteEquitySalePurchaseReq = Joi.object({
  id: Joi.number().required(),
});

export const getEquitySalePurchaseReq = Joi.object({
  id: Joi.number().required(),
});

export const updateEquitySalePurchaseReq = Joi.object({
  id: Joi.number().required(),
  billNo: Joi.string().required(),
  billDate: Joi.date().required(),
  transactionType: Joi.string().valid("P", "S").required(),
  scriptId: Joi.number().required(),
  purchaseId: Joi.number().optional(),
  quantity: Joi.number().required(),
  bonus: Joi.number().required(),
  value: Joi.number().required(),
  accountId: Joi.number().required(),
  brokage: Joi.number().required(),
  cess: Joi.number().required(),
  stt: Joi.number().required(),
  serviceTax: Joi.number().required(),
  stampDuty: Joi.number().required(),
  turnoverTax: Joi.number().required(),
  netValue: Joi.number().required(),
  netRate: Joi.number().required(),
  companyCode: Joi.number().required(),
  modifiedBy: Joi.number().required(),
});

// Expiry Master

export const insertExpiryMasterReq = Joi.object({
  expiryDate: Joi.date().required(),
});

export const deleteExpiryMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const getExpiryMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const updateExpiryMasterReq = Joi.object({
  id: Joi.number().required(),
  expiryDate: Joi.date().required(),
});

// B - Balancesheet, P - Income/Expensis , T - Trading

// Group Master

export const insertGroupMasterReq = Joi.object({
  groupName: Joi.string().required(),
  groupType: Joi.string().valid("B", "P", "T").required(),
  groupOrder: Joi.number().required(),
  companyCode: Joi.number().required(),
  createdBy: Joi.number().required(),
  modifiedBy: Joi.number().optional(),
});

export const deleteGroupMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const getGroupMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const updateGroupMasterReq = Joi.object({
  id: Joi.number().required(),
  groupName: Joi.string().required(),
  groupType: Joi.string().valid("B", "P", "T").required(),
  groupOrder: Joi.number().required(),
  companyCode: Joi.number().required(),
  modifiedBy: Joi.number().required(),
});

// Gst Rate Master

export const insertGstRateMasterReq = Joi.object({
  gstCode: Joi.number().required(),
  gstName: Joi.string().required(),
  rate: Joi.number().required(),
  cGstRate: Joi.number().required(),
  sGstRate: Joi.number().required(),
  iGstRate: Joi.number().required(),
  companyCode: Joi.number().required(),
  createdBy: Joi.number().required(),
  modifiedBy: Joi.number().optional(),
});

export const deleteGstRateMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const getGstRateMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const updateGstRateMasterReq = Joi.object({
  id: Joi.number().required(),
  gstCode: Joi.number().required(),
  gstName: Joi.string().required(),
  rate: Joi.number().required(),
  cGstRate: Joi.number().required(),
  sGstRate: Joi.number().required(),
  igstRate: Joi.number().required(),
  companyCode: Joi.number().required(),
  modifiedBy: Joi.number().required(),
});

// Item Master

export const insertItemMasterReq = Joi.object({
  itemCode: Joi.number().required(),
  itemName: Joi.string().required(),
  openingStock: Joi.number().optional(),
  wtPer: Joi.number().optional(),
  hsnNo: Joi.string().optional(),
  gstCode: Joi.number().required(),
  isService: Joi.string().valid().required(),
  openingValue: Joi.number().optional(),
  ratePer: Joi.string().valid().optional(),
  reverseCalculation: Joi.string().valid().optional(),
  purchaseAccount: Joi.number().required(),
  pa: Joi.number().required(),
  sellAccount: Joi.number().required(),
  sa: Joi.number().required(),
  companyCode: Joi.number().required(),
  createdBy: Joi.number().required(),
  modifiedBy: Joi.number().optional(),
});

export const deleteItemMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const getItemMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const updateItemMasterReq = Joi.object({
  id: Joi.number().required(),
  itemCode: Joi.number().required(),
  itemName: Joi.string().required(),
  openingStock: Joi.number().optional(),
  wtPer: Joi.number().optional(),
  hsnNo: Joi.string().optional(),
  gstCode: Joi.number().required(),
  isService: Joi.string().valid().required(),
  openingValue: Joi.number().optional(),
  ratePer: Joi.string().valid().optional(),
  reverseCalculation: Joi.string().valid().optional(),
  purchaseAccount: Joi.number().required(),
  pa: Joi.number().required(),
  sellAccount: Joi.number().required(),
  sa: Joi.number().required(),
  companyCode: Joi.number().required(),
  modifiedBy: Joi.number().required(),
});

// Script Master

// E - Equity, F - F&O, C - Commodity

export const insertScriptMasterReq = Joi.object({
  scriptName: Joi.string().required(),
  scriptType: Joi.string().valid("E", "F", "C").required(),
  lotSize: Joi.number().required(),
  faceValue: Joi.number().required(),
  scriptId: Joi.string().required(),
  isinNo: Joi.string().required(),
  createdBy: Joi.number().required(),
  modifiedBy: Joi.number().optional(),
});

export const deleteScriptMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const getScriptMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const updateScriptMasterReq = Joi.object({
  id: Joi.number().required(),
  scriptName: Joi.string().required(),
  scriptType: Joi.string().valid("E", "F", "C").required(),
  lotSize: Joi.number().required(),
  faceValue: Joi.number().required(),
  scriptId: Joi.string().required(),
  isinNo: Joi.string().required(),
  modifiedBy: Joi.number().required(),
});

// State Master

export const insertStateMasterReq = Joi.object({
  cityName: Joi.string().required(),
  pinCode: Joi.string().optional(),
  subArea: Joi.string().optional(),
  state: Joi.string().optional(),
  stateCode: Joi.string().required(),
  companyCode: Joi.number().required(),
  createdBy: Joi.number().required(),
  modifiedBy: Joi.number().optional(),
});

export const deleteStateMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const getStateMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const updateStateMasterReq = Joi.object({
  id: Joi.number().required(),
  cityName: Joi.string().required(),
  pinCode: Joi.string().optional(),
  subArea: Joi.string().optional(),
  state: Joi.string().optional(),
  stateCode: Joi.string().required(),
  companyCode: Joi.number().required(),
  modifiedBy: Joi.number().required(),
});

// User Forms

export const insertUserFormsReq = Joi.object({
  userId: Joi.number().required(),
  formName: Joi.string().required(),
});

export const deleteUserFormsReq = Joi.object({
  id: Joi.number().required(),
});

export const getUserFormsReq = Joi.object({
  id: Joi.number().required(),
});

export const updateUserFormsReq = Joi.object({
  id: Joi.number().required(),
  userId: Joi.number().required(),
  formName: Joi.string().required(),
});

// Users

export const insertUsersReq = Joi.object({
  userName: Joi.string().required(),
  userId: Joi.string().required(),
  emailAddress: Joi.string().optional(),
  emailPassword: Joi.string().optional(),
  mobileNo: Joi.string().optional(),
  userType: Joi.string().valid().required(),
  userCategory: Joi.string().optional(),
  companyCode: Joi.number().required(),
  createdBy: Joi.number().required(),
  modifiedBy: Joi.number().optional(),
});

export const deleteUsersReq = Joi.object({
  id: Joi.number().required(),
});

export const getUsersReq = Joi.object({
  id: Joi.number().required(),
});

export const updateUsersReq = Joi.object({
  id: Joi.number().required(),
  userName: Joi.string().required(),
  userId: Joi.string().required(),
  emailAddress: Joi.string().optional(),
  emailPassword: Joi.string().optional(),
  mobileNo: Joi.string().optional(),
  userType: Joi.string().valid().required(),
  userCategory: Joi.string().optional(),
  companyCode: Joi.number().required(),
  modifiedBy: Joi.number().required(),
});

// Year Master

export const insertYearMasterReq = Joi.object({
  fromDate: Joi.date().required(),
  toDate: Joi.date().required(),
});

export const deleteYearMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const getYearMasterReq = Joi.object({
  id: Joi.number().required(),
});

export const updateYearMasterReq = Joi.object({
  id: Joi.number().required(),
  fromDate: Joi.date().required(),
  toDate: Joi.date().required(),
});

// TRANSACTION HEAD DETAILS
export const insertTransactionHeadDetailsReq = Joi.object({
  head: Joi.object({
    tran_type: Joi.string().valid("bp", "br", "cp", "cr").required(),
    doc_no: Joi.number().optional(),
    doc_date: Joi.date().optional(),
    cashbank: Joi.number().optional(),
    total: Joi.string().optional(),
    ode: Joi.number().optional(),
    year_code: Joi.number().optional(),
    company_code: Joi.number().required(),
    cb: Joi.number().required(),
    created_by: Joi.number().required(),
    modified_by: Joi.number().optional(),
  }),
  details: Joi.array()
    .items(
      Joi.object({
        details_id: Joi.number().optional(),
        debit_ac: Joi.number().optional(),
        credit_ac: Joi.number().optional(),
        amount: Joi.number().optional(),
        narration: Joi.string().optional(),
        drcr: Joi.string().valid("D", "C").optional(),
        da: Joi.number().required(),
        ca: Joi.number().required(),
      })
    )
    .min(1),
  // .required(),
});

export const getTransactionHeadDetailsReq = Joi.object({
  head: Joi.object({
    id: Joi.array().items(Joi.number().required()),
  }),
});

export const updateTransactionHeadDetailsReq = Joi.object({
  head: Joi.object({
    id: Joi.array().items(Joi.number().required()).required(),
    tran_type: Joi.string().valid("bp", "br", "cp", "cr").required(),
    doc_no: Joi.number().optional(),
    doc_date: Joi.date().optional(),
    cashbank: Joi.number().optional(),
    total: Joi.string().optional(),
    ode: Joi.number().optional(),
    year_code: Joi.number().optional(),
    company_code: Joi.number().required(),
    cb: Joi.number().required(),
    modified_by: Joi.number().required(),
  }),
  details: Joi.object({
    delete: Joi.object({
      id: Joi.array().items(Joi.number().required()).required(),
    }),
    insert: Joi.array().items(
      Joi.object({
        tran_id: Joi.number().required(),
        details_id: Joi.number().optional(),
        debit_ac: Joi.number().optional(),
        credit_ac: Joi.number().optional(),
        amount: Joi.number().optional(),
        narration: Joi.string().optional(),
        drcr: Joi.string().valid("D", "C").optional(),
        da: Joi.number().required(),
        ca: Joi.number().required(),
      })
    ),
    update: Joi.array().items(
      Joi.object({
        id: Joi.number().required(),
        details_id: Joi.number().optional(),
        debit_ac: Joi.number().optional(),
        credit_ac: Joi.number().optional(),
        amount: Joi.number().optional(),
        narration: Joi.string().optional(),
        drcr: Joi.string().valid("D", "C").optional(),
        da: Joi.number().required(),
        ca: Joi.number().required(),
      })
    ),
  }),
});

export const deleteTransactionHeadDetailsReq = Joi.object({
  head: Joi.object({
    id: Joi.array().items(Joi.number().required()),
  }),
});

