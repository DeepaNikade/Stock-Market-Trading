import {
  // ACCOUNT MASTER
  insertIntoAccountMaster,
  updateIntoAccountMaster,
  deleteAccountMasterByQuery,
  getDataFromAccountMaster,
  getAllDataFromAccountMaster,

  // GROUP MASTER
  insertIntoGroupMaster,
  updateIntoGroupMaster,
  deleteGroupMasterByQuery,
  getDataFromGroupMaster,
  getAllDataFromGroupMaster,

  // COMPANY
  insertIntoCompany,
  updateIntoCompany,
  deleteCompanyByQuery,
  getDataFromCompany,
  getAllDataFromCompany,

  // EXPIRY Master
  insertIntoExpiryMaster,
  updateExpiryMaster,
  deleteExpiryMasterByQuery,
  getDataFromExpiryMaster,
  getAllDataFromExpiryMaster,

  // GST RATE MASTER
  insertIntoGstRateMaster,
  updateIntoGstRateMaster,
  deleteGstRateMasterByQuery,
  getDataFromGstRateMaster,
  getAllDataFromGstRateMaster,

  // SCRIPT MASTER
  insertIntoScriptMaster,
  updateIntoScriptMaster,
  deleteScriptMasterByQuery,
  getDataFromScriptMaster,
  getAllDataFromScriptMaster,

  // ITEM MASTER
  insertIntoItemMaster,
  updateIntoItemMaster,
  deleteItemMasterByQuery,
  getDataFromItemMaster,
  getAllDataFromItemMaster,

  // STATE MASTER
  insertIntoStateMaster,
  updateIntoStateMaster,
  deleteStateMasterByQuery,
  getDataFromStateMaster,
  getAllDataFromStateMaster,

  // USER FORMS
  insertIntoUserForms,
  updateIntoUserForms,
  deleteUserFormsByQuery,
  getDataFromUserForms,
  // getAllDataFromUserForms,

  // USERS
  insertIntoUsers,
  updateIntoUsers,
  deleteUsersByQuery,
  getDataFromUsers,
  // getAllDataFromUsers,

  // EQUITY SALE PURCHASE
  insertIntoEquitySalePurchase,
  updateIntoEquitySalePurchase,
  deleteEquitySalePurchaseByQuery,
  getDataFromEquitySalePurchase,
  getAllDataFromEquitySalePurchase,

  // YEAR MASTER
  insertIntoYearMaster,
  updateIntoYearMaster,
  deleteYearMasterByQuery,
  getDataFromYearMaster,

  // TRANSACTION HEAD
  insertIntoTransactionHead,
  getDataFromTransactionHead,
  updateTransactionHeadByQuery,
  deleteTransactionHeadByQuery,

  // TRANSACTION DETAILS
  insertIntoTransactionDetails,
  getDataFromTransactionDetails,
  updateTransactionDetailsByQuery,
  deleteTransactionDetailsByQuery,
} from "../models/index.js";

import { validateReq } from "../utils/index.js";
import { sendResponse } from "../utils/index.js";
import {
  // Account Master
  insertAccountMasterReq,
  getAccountMasterReq,
  updateAccountMasterReq,
  deleteAccountMasterReq,

  // Company
  insertCompanyReq,
  getCompanyReq,
  updateCompanyReq,
  deleteCompanyReq,

  // Expiry Master
  insertExpiryMasterReq,
  getExpiryMasterReq,
  updateExpiryMasterReq,
  deleteExpiryMasterReq,

  // Group Master
  insertGroupMasterReq,
  getGroupMasterReq,
  updateGroupMasterReq,
  deleteGroupMasterReq,

  // Gst Rate Master
  insertGstRateMasterReq,
  getGstRateMasterReq,
  updateGstRateMasterReq,
  deleteGstRateMasterReq,

  // item Master
  insertItemMasterReq,
  getItemMasterReq,
  updateItemMasterReq,
  deleteItemMasterReq,

  // Script Master
  insertScriptMasterReq,
  getScriptMasterReq,
  updateScriptMasterReq,
  deleteScriptMasterReq,

  // State Master
  insertStateMasterReq,
  getStateMasterReq,
  updateStateMasterReq,
  deleteStateMasterReq,

  // User Forms
  insertUserFormsReq,
  getUserFormsReq,
  updateUserFormsReq,
  deleteUserFormsReq,

  // Users
  insertUsersReq,
  getUsersReq,
  updateUsersReq,
  deleteUsersReq,

  // EQUITY SALE PURCHASE
  insertEquitySalePurchaseReq,
  getEquitySalePurchaseReq,
  updateEquitySalePurchaseReq,
  deleteEquitySalePurchaseReq,

  // YEAR MASTER
  insertYearMasterReq,
  updateYearMasterReq,
  deleteYearMasterReq,
  getYearMasterReq,

  // TRANSACTION HEAD DETAILS
  insertTransactionHeadDetailsReq,
  getTransactionHeadDetailsReq,
  updateTransactionHeadDetailsReq,
  deleteTransactionHeadDetailsReq,
} from "../validators/user.validator.js";

//   Account Master

export async function insertAccountMaster(req, res) {
  const { error, value } = validateReq(insertAccountMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const accountMasterDataQuery = await insertIntoAccountMaster(value);
    return sendResponse(res, 200, accountMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateAccountMaster(req, res) {
  const { error, value } = validateReq(updateAccountMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    if (!req.body.createdBy) {
      const accountMasterDataQuery = await updateIntoAccountMaster(value, {
        where: { id: value.id },
        returning: true,
      });
      return sendResponse(res, 200, accountMasterDataQuery);
    }
    return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function deleteAccountMaster(req, res) {
  const { error, value } = validateReq(deleteAccountMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const accountMasterDataQuery = await deleteAccountMasterByQuery(whereQuery);
    return sendResponse(res, 200, accountMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAccountMaster(req, res) {
  const { error, value } = validateReq(getAccountMasterReq, req.body);

  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const accountMasterDataQuery = await getDataFromAccountMaster({
      where: { id: value.id },
    });
    return sendResponse(res, 200, accountMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllAccountMaster(req, res) {
  try {
    const allAccountMasterDataQuery = await getAllDataFromAccountMaster();
    return sendResponse(res, 200, allAccountMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// COMPANY

export async function insertCompany(req, res) {
  const { error, value } = validateReq(insertCompanyReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const companyDataQuery = await insertIntoCompany(value);
    return sendResponse(res, 200, companyDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateCompany(req, res) {
  const { error, value } = validateReq(updateCompanyReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    if (!req.body.createdBy) {
      const companyDataQuery = await updateIntoCompany(value, {
        where: { id: value.id },
        returning: true,
      });
      return sendResponse(res, 200, companyDataQuery);
    }
    return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (error) {
    sendResponse(res, 500, err);
  }
}

export async function deleteCompany(req, res) {
  const { error, value } = validateReq(deleteCompanyReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const companyDataQuery = await deleteCompanyByQuery(whereQuery);
    return sendResponse(res, 200, companyDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getCompany(req, res) {
  const { error, value } = validateReq(getCompanyReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const companyDataQuery = await getDataFromCompany({
      where: { id: value.id },
    });
    return sendResponse(res, 200, companyDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllCompany(req, res) {
  try {
    const allCompanyDataQuery = await getAllDataFromCompany();
    return sendResponse(res, 200, allCompanyDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// EXPIRY MASTER
export async function insertExpiryMaster(req, res) {
  const { error, value } = validateReq(insertExpiryMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const expiryMasterDataQuery = await insertIntoExpiryMaster(value);
    return sendResponse(res, 200, expiryMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateIntoExpiryMaster(req, res) {
  const { error, value } = validateReq(updateExpiryMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    if (!req.body.createdBy) {
      const expiryMasterDataQuery = await updateExpiryMaster(value, {
        where: { id: value.id },
        returning: true,
      });
      return sendResponse(res, 200, expiryMasterDataQuery);
    }
    return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (error) {
    sendResponse(res, 500, err);
  }
}

export async function deleteExpiryMaster(req, res) {
  const { error, value } = validateReq(deleteExpiryMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const expiryMasterDataQuery = await deleteExpiryMasterByQuery(whereQuery);
    return sendResponse(res, 200, expiryMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getExpiryMaster(req, res) {
  const { error, value } = validateReq(getExpiryMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const expiryMasterDataQuery = await getDataFromExpiryMaster({
      where: { id: value.id },
    });
    return sendResponse(res, 200, expiryMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllExpiryMaster(req, res) {
  try {
    const allExpiryMasterDataQuery = await getAllDataFromExpiryMaster();
    return sendResponse(res, 200, allExpiryMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// GROUP MASTER

export async function insertGroupMaster(req, res) {
  const { error, value } = validateReq(insertGroupMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const groupMasterDataQuery = await insertIntoGroupMaster(value);
    return sendResponse(res, 200, groupMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateGroupMaster(req, res) {
  const { error, value } = validateReq(updateGroupMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    if (!req.body.createdBy) {
      const groupMasterDataQuery = await updateIntoGroupMaster(value, {
        where: { id: value.id },
        returning: true,
      });
      return sendResponse(res, 200, groupMasterDataQuery);
    }
    return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (error) {
    sendResponse(res, 500, err);
  }
}

export async function deleteGroupMaster(req, res) {
  const { error, value } = validateReq(deleteGroupMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const groupMasterDataQuery = await deleteGroupMasterByQuery(whereQuery);
    return sendResponse(res, 200, groupMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getGroupMaster(req, res) {
  const { error, value } = validateReq(getGroupMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const groupMasterDataQuery = await getDataFromGroupMaster({
      where: { id: value.id },
    });
    return sendResponse(res, 200, groupMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllGroupMaster(req, res) {
  try {
    const allGroupMasterDataQuery = await getAllDataFromGroupMaster();
    return sendResponse(res, 200, allGroupMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// ITEM MASTER
export async function insertItemMaster(req, res) {
  const { error, value } = validateReq(insertItemMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const itemMasterDataQuery = await insertIntoItemMaster(value);
    return sendResponse(res, 200, itemMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateItemMaster(req, res) {
  const { error, value } = validateReq(updateItemMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    if (!req.body.createdBy) {
      const itemMasterDataQuery = await updateIntoItemMaster(value, {
        where: { id: value.id },
        returning: true,
      });
      return sendResponse(res, 200, itemMasterDataQuery);
    }
    return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (error) {
    sendResponse(res, 500, err);
  }
}

export async function deleteItemMaster(req, res) {
  const { error, value } = validateReq(deleteItemMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const itemMasterDataQuery = await deleteItemMasterByQuery(whereQuery);
    return sendResponse(res, 200, itemMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getItemMaster(req, res) {
  const { error, value } = validateReq(getItemMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const itemMasterDataQuery = await getDataFromItemMaster({
      where: { id: value.id },
    });
    return sendResponse(res, 200, itemMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllItemMaster(req, res) {
  try {
    const allItemMasterDataQuery = await getAllDataFromItemMaster();
    return sendResponse(res, 200, allItemMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// GST RATE MASTER
export async function insertGstRateMaster(req, res) {
  const { error, value } = validateReq(insertGstRateMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const gstRateMasterDataQuery = await insertIntoGstRateMaster(value);
    return sendResponse(res, 200, gstRateMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateGstRateMaster(req, res) {
  const { error, value } = validateReq(updateGstRateMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    if (!req.body.createdBy) {
      const gstRateMasterDataQuery = await updateIntoGstRateMaster(value, {
        where: { id: value.id },
        returning: true,
      });
      return sendResponse(res, 200, gstRateMasterDataQuery);
    }
    return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (error) {
    sendResponse(res, 500, err);
  }
}

export async function deleteGstRateMaster(req, res) {
  const { error, value } = validateReq(deleteGstRateMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const gstRateMasterDataQuery = await deleteGstRateMasterByQuery(whereQuery);
    return sendResponse(res, 200, gstRateMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getGstRateMaster(req, res) {
  const { error, value } = validateReq(getGstRateMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const gstRateMasterDataQuery = await getDataFromGstRateMaster({
      where: { id: value.id },
    });
    return sendResponse(res, 200, gstRateMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllGstRateMaster(req, res) {
  try {
    const allGstRateMasterDataQuery = await getAllDataFromGstRateMaster();
    return sendResponse(res, 200, allGstRateMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}
// SCRIPT MASTER
export async function insertScriptMaster(req, res) {
  const { error, value } = validateReq(insertScriptMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const scriptMasterDataQuery = await insertIntoScriptMaster(value);
    return sendResponse(res, 200, scriptMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateScriptMaster(req, res) {
  const { error, value } = validateReq(updateScriptMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    if (!req.body.createdBy) {
      const scriptMasterDataQuery = await updateIntoScriptMaster(value, {
        where: { id: value.id },
        returning: true,
      });
      return sendResponse(res, 200, scriptMasterDataQuery);
    }
    return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (error) {
    sendResponse(res, 500, err);
  }
}

export async function deleteScriptMaster(req, res) {
  const { error, value } = validateReq(deleteScriptMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const scriptMasterDataQuery = await deleteScriptMasterByQuery(whereQuery);
    return sendResponse(res, 200, scriptMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getScriptMaster(req, res) {
  const { error, value } = validateReq(getScriptMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const scriptMasterDataQuery = await getDataFromScriptMaster({
      where: { id: value.id },
    });
    return sendResponse(res, 200, scriptMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllScriptMaster(req, res) {
  try {
    const allScriptMasterDataQuery = await getAllDataFromScriptMaster();
    return sendResponse(res, 200, allScriptMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// STATE MASTER
export async function insertStateMaster(req, res) {
  const { error, value } = validateReq(insertStateMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const stateMasterDataQuery = await insertIntoStateMaster(value);
    return sendResponse(res, 200, stateMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateStateMaster(req, res) {
  const { error, value } = validateReq(updateStateMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    if (!req.body.createdBy) {
      const stateMasterDataQuery = await updateIntoStateMaster(value, {
        where: { id: value.id },
        returning: true,
      });
      return sendResponse(res, 200, stateMasterDataQuery);
    }
    return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (error) {
    sendResponse(res, 500, err);
  }
}

export async function deleteStateMaster(req, res) {
  const { error, value } = validateReq(deleteStateMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const stateMasterDataQuery = await deleteStateMasterByQuery(whereQuery);
    return sendResponse(res, 200, stateMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getStateMaster(req, res) {
  const { error, value } = validateReq(getStateMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const stateMasterDataQuery = await getDataFromStateMaster({
      where: { id: value.id },
    });
    return sendResponse(res, 200, stateMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}
export async function getAllStateMaster(req, res) {
  try {
    const allStateMasterDataQuery = await getAllDataFromStateMaster();
    return sendResponse(res, 200, allStateMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// USER FORMS
export async function insertUserForms(req, res) {
  const { error, value } = validateReq(insertUserFormsReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const userFormsDataQuery = await insertIntoUserForms(value);
    return sendResponse(res, 200, userFormsDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateUserForms(req, res) {
  const { error, value } = validateReq(updateUserFormsReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    if (!req.body.createdBy) {
      const userFormsDataQuery = await updateIntoUserForms(value, {
        where: { id: value.id },
        returning: true,
      });
      return sendResponse(res, 200, userFormsDataQuery);
    }
    return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (error) {
    sendResponse(res, 500, err);
  }
}

export async function deleteUserForms(req, res) {
  const { error, value } = validateReq(deleteUserFormsReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const userFormsDataQuery = await deleteUserFormsByQuery(whereQuery);
    return sendResponse(res, 200, userFormsDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getUserForms(req, res) {
  const { error, value } = validateReq(getUserFormsReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const userFormsDataQuery = await getDataFromUserForms({
      where: { id: value.id },
    });
    return sendResponse(res, 200, userFormsDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// USERS
export async function insertUsers(req, res) {
  const { error, value } = validateReq(insertUsersReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const usersDataQuery = await insertIntoUsers(value);
    return sendResponse(res, 200, usersDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateUsers(req, res) {
  const { error, value } = validateReq(updateUsersReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    if (!req.body.createdBy) {
      const usersDataQuery = await updateIntoUsers(value, {
        where: { id: value.id },
        returning: true,
      });
      return sendResponse(res, 200, usersDataQuery);
    }
    return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (error) {
    sendResponse(res, 500, err);
  }
}

export async function deleteUsers(req, res) {
  const { error, value } = validateReq(deleteUsersReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const usersDataQuery = await deleteUsersByQuery(whereQuery);
    return sendResponse(res, 200, usersDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getUsers(req, res) {
  const { error, value } = validateReq(getUsersReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const usersDataQuery = await getDataFromUsers({
      where: { id: value.id },
    });
    return sendResponse(res, 200, usersDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// EQUITY SALE PURCHASE
export async function insertEquitySalePurchase(req, res) {
  const { error, value } = validateReq(insertEquitySalePurchaseReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const equitySalePurchaseDataQuery = await insertIntoEquitySalePurchase(
      value
    );
    return sendResponse(res, 200, equitySalePurchaseDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateEquitySalePurchase(req, res) {
  const { error, value } = validateReq(updateEquitySalePurchaseReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    if (!req.body.createdBy) {
      const equitySalePurchaseDataQuery = await updateIntoEquitySalePurchase(
        value,
        {
          where: { id: value.id },
          returning: true,
        }
      );
      return sendResponse(res, 200, equitySalePurchaseDataQuery);
    }
    return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (error) {
    sendResponse(res, 500, err);
  }
}

export async function deleteEquitySalePurchase(req, res) {
  const { error, value } = validateReq(deleteEquitySalePurchaseReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const equitySalePurchaseDataQuery = await deleteEquitySalePurchaseByQuery(
      whereQuery
    );
    return sendResponse(res, 200, equitySalePurchaseDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getEquitySalePurchase(req, res) {
  const { error, value } = validateReq(getEquitySalePurchaseReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const equitySalePurchaseDataQuery = await getDataFromEquitySalePurchase({
      where: { id: value.id },
    });
    return sendResponse(res, 200, equitySalePurchaseDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getAllEquitySalePurchase(req, res) {
  try {
    const allEquitySalePurchaseDataQuery =
      await getAllDataFromEquitySalePurchase();
    return sendResponse(res, 200, allEquitySalePurchaseDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// YEAR MASTER
export async function insertYearMaster(req, res) {
  const { error, value } = validateReq(insertYearMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const yearMasterDataQuery = await insertIntoYearMaster(value);
    return sendResponse(res, 200, yearMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function updateYearMaster(req, res) {
  const { error, value } = validateReq(updateYearMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    if (!req.body.createdBy) {
      const yearMasterDataQuery = await updateIntoYearMaster(value, {
        where: { id: value.id },
        returning: true,
      });
      return sendResponse(res, 200, yearMasterDataQuery);
    }
    return sendResponse(res, 500, { message: "createdBy cannot be updated" });
  } catch (error) {
    sendResponse(res, 500, err);
  }
}

export async function deleteYearMaster(req, res) {
  const { error, value } = validateReq(deleteYearMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const whereQuery = {
      where: {
        id: value.id,
      },
    };
    const yearMasterDataQuery = await deleteYearMasterByQuery(whereQuery);
    return sendResponse(res, 200, yearMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getYearMaster(req, res) {
  const { error, value } = validateReq(getYearMasterReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }
  try {
    const yearMasterDataQuery = await getDataFromYearMaster({
      where: { id: value.id },
    });
    return sendResponse(res, 200, yearMasterDataQuery);
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

// TRANSACTION HEAD DETAILS
export async function insertTransactionHeadDetails(req, res) {
  const { error, value } = validateReq(
    insertTransactionHeadDetailsReq,
    req.body
  );
  if (error) {
    return sendResponse(res, 422, error);
  }
  const { head, details } = value;
  try {
    const transactionHeadData = await insertIntoTransactionHead(head);

    const transactionDetailsData = await Promise.all(
      details.map((d) => {
        const data = insertIntoTransactionDetails({
          ...d,
          tran_id: transactionHeadData.id,
        });
        return data;
      })
    );
    sendResponse(res, 200, { transactionHeadData, transactionDetailsData });
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function getTransactionHeadDetails(req, res) {
  const { error, value } = validateReq(getTransactionHeadDetailsReq, req.body);
  if (error) {
    return sendResponse(res, 422, error);
  }

  const { head, details } = value;
  console.log("value: ", value);

  let apiResponse = {};
  try {
    if (head) {
      const getTransactionHeadData = await getDataFromTransactionHead({
        where: { id: head.id },
        returning: true,
      });
      apiResponse = { ...apiResponse, getTransactionHeadData };
    }
    if (!details) {
      const getTransactionDetailsData = await getDataFromTransactionDetails({
        where: { tran_id: head.id },
        returning: true,
      });
      apiResponse = { ...apiResponse, getTransactionDetailsData };
    }

    sendResponse(res, 200, apiResponse);
  } catch (err) {
    console.log(err);
    sendResponse(res, 500, err);
  }
}

export async function updateTransactionHeadDetails(req, res) {
  const { error, value } = validateReq(
    updateTransactionHeadDetailsReq,
    req.body
  );
  if (error) {
    return sendResponse(res, 422, error.details);
  }

  let apiResponse = {};
  try {
    //head update
    if (value.head) {
      const updateTransactionHeadData = await updateTransactionHeadByQuery(
        value.head,
        {
          where: { id: value.head.id },
          returning: true,
        }
      );
      apiResponse = { ...apiResponse, updateTransactionHeadData };
    }

    // details delete
    if (value.details.delete) {
      const whereQuery = {
        where: {
          id: {
            [Op.in]: value.details.delete.id,
          },
        },
      };
      const deleteTransactionDetailsData =
        await deleteTransactionDetailsByQuery(whereQuery);
      apiResponse = { ...apiResponse, deleteTransactionDetailsData };
    }

    // details insert
    if (value.details.insert) {
      const insertTransactionDetailsData = await Promise.all(
        value.details.insert.map((d) => {
          const insertedData = insertIntoTransactionDetails(d);
          return insertedData;
        })
      );
      apiResponse = { ...apiResponse, insertTransactionDetailsData };
    }

    // details update
    if (value.details.update) {
      const updateTransactionDetailsData = await Promise.all(
        value.details.update.map((data) => {
          const { id, ...others } = data;
          return updateTransactionDetailsByQuery(others, {
            where: { id: id },
            returning: true,
          });
        })
      );
      apiResponse = { ...apiResponse, updateTransactionDetailsData };
    }

    sendResponse(res, 200, { message: "success", data: apiResponse });
  } catch (err) {
    sendResponse(res, 500, err);
  }
}

export async function deleteTransactionHeadDetails(req, res) {
  const { error, value } = validateReq(
    deleteTransactionHeadDetailsReq,
    req.body
  );
  if (error) {
    return sendResponse(res, 422, error);
  }

  let apiResponse = {};

  try {
    const whereQuery = {
      where: {
        id: {
          [Op.in]: value.head.id,
        },
      },
    };
    const deleteTransactionHeadData = await deleteTransactionHeadByQuery(
      whereQuery
    );

    const query = {
      where: {
        tran_id: {
          [Op.in]: value.head.id,
        },
      },
    };
    const deleteTransactionDetailsData = await deleteTransactionDetailsByQuery(
      query
    );

    apiResponse = {
      ...apiResponse,
      deleteTransactionHeadData,
      deleteTransactionDetailsData,
    };

    return sendResponse(res, 200, apiResponse);
  } catch (err) {
    console.log(err);
    sendResponse(res, 500, err);
  }
}
