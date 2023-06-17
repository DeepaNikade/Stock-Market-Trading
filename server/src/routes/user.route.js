import { Router } from "express";

import {
  //ACCOUNT MASTER
  insertAccountMaster,
  updateAccountMaster,
  deleteAccountMaster,
  getAccountMaster,

  // COMPANY
  insertCompany,
  updateCompany,
  deleteCompany,
  getCompany,

  // EXPIRY MASTER
  insertExpiryMaster,
  updateIntoExpiryMaster,
  deleteExpiryMaster,
  getExpiryMaster,

  // GROUP MASTER
  insertGroupMaster,
  updateGroupMaster,
  deleteGroupMaster,
  getGroupMaster,

  // ITEM MASTER
  insertItemMaster,
  updateItemMaster,
  deleteItemMaster,
  getItemMaster,

  // GST RATE MASTER
  insertGstRateMaster,
  updateGstRateMaster,
  deleteGstRateMaster,
  getGstRateMaster,

  // SCRIPT MASTER
  insertScriptMaster,
  updateScriptMaster,
  deleteScriptMaster,
  getScriptMaster,

  // STATE MASTER
  insertStateMaster,
  updateStateMaster,
  deleteStateMaster,
  getStateMaster,

  // USER FORMS
  insertUserForms,
  updateUserForms,
  deleteUserForms,
  getUserForms,

  // USERS
  insertUsers,
  updateUsers,
  deleteUsers,
  getUsers,

  // EQUITY SALE PURCHASE
  insertEquitySalePurchase,
  updateEquitySalePurchase,
  deleteEquitySalePurchase,
  getEquitySalePurchase,

  // YEAR MASTER
  insertYearMaster,
  updateYearMaster,
  deleteYearMaster,
  getYearMaster,

  // TRANSACTION HEAD DEATILS
  insertTransactionHeadDetails,
  updateTransactionHeadDetails,
  deleteTransactionHeadDetails,
  getTransactionHeadDetails,
} from "../controller/user.controller.js";

const router = Router();

// ACCOUNT MASTER
router.post("/accountMaster", insertAccountMaster);
router.patch("/accountMaster", updateAccountMaster);
router.post("/accountMaster/delete", deleteAccountMaster);
router.get("/accountMaster", getAccountMaster);

// COMPANY
router.post("/company", insertCompany);
router.patch("/company", updateCompany);
router.post("/company/delete", deleteCompany);
router.get("/company", getCompany);

// EXPIRY MASTER
router.post("/expiryMaster", insertExpiryMaster);
router.patch("/expiryMaster", updateIntoExpiryMaster);
router.post("/expiryMaster/delete", deleteExpiryMaster);
router.get("/expiryMaster", getExpiryMaster);

// GROUP MASTER
router.post("/groupMaster", insertGroupMaster);
router.patch("/groupMaster", updateGroupMaster);
router.post("/groupMaster/delete", deleteGroupMaster);
router.get("/groupMaster", getGroupMaster);

// ITEM MASTER
router.post("/itemMaster", insertItemMaster);
router.patch("/itemMaster", updateItemMaster);
router.post("/itemMaster/delete", deleteItemMaster);
router.get("/itemMaster", getItemMaster);

// GST RATE MASTER
router.post("/gstRateMaster", insertGstRateMaster);
router.patch("/gstRateMaster", updateGstRateMaster);
router.post("/gstRateMaster/delete", deleteGstRateMaster);
router.get("/gstRateMaster", getGstRateMaster);

// SCRIPT MASTER
router.post("/scriptMaster", insertScriptMaster);
router.patch("/scriptMaster", updateScriptMaster);
router.post("/scriptMaster/delete", deleteScriptMaster);
router.get("/scriptMaster", getScriptMaster);

// STATE MASTER
router.post("/stateMaster", insertStateMaster);
router.patch("/stateMaster", updateStateMaster);
router.post("/stateMaster/delete", deleteStateMaster);
router.get("/stateMaster", getStateMaster);

// USER FORMS
router.post("/userForms", insertUserForms);
router.patch("/userForms", updateUserForms);
router.post("/userForms/delete", deleteUserForms);
router.get("/userForms", getUserForms);

// USERS
router.post("/users", insertUsers);
router.patch("/users", updateUsers);
router.post("/users/delete", deleteUsers);
router.get("/users", getUsers);

// EQUITY SALE PURCHASE
router.post("/equitySalePurchase", insertEquitySalePurchase);
router.patch("/equitySalePurchase", updateEquitySalePurchase);
router.post("/equitySalePurchase/delete", deleteEquitySalePurchase);
router.get("/equitySalePurchase", getEquitySalePurchase);

// YEAR MASTER
router.post("/yearMaster", insertYearMaster);
router.patch("/yearMaster", updateYearMaster);
router.post("/yearMaster/delete", deleteYearMaster);
router.get("/yearMaster", getYearMaster);

// TRANSACTION HEAD DETAILS
router.post("/transactionHeadDetails", insertTransactionHeadDetails);
router.patch("/transactionHeadDetails", updateTransactionHeadDetails);
router.post("/transactionHeadDetails/delete", deleteTransactionHeadDetails);
router.get("/transactionHeadDetails", getTransactionHeadDetails);

export default router;
