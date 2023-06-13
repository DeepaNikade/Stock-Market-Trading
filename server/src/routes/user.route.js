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
router.delete("/accountMaster", deleteAccountMaster);
router.get("/accountMaster", getAccountMaster);

// COMPANY
router.post("/company", insertCompany);
router.patch("/company", updateCompany);
router.delete("/company", deleteCompany);
router.get("/company", getCompany);

// EXPIRY MASTER
router.post("/expiryMaster", insertExpiryMaster);
router.patch("/expiryMaster", updateIntoExpiryMaster);
router.delete("/expiryMaster", deleteExpiryMaster);
router.get("/expiryMaster", getExpiryMaster);

// GROUP MASTER
router.post("/groupMaster", insertGroupMaster);
router.patch("/groupMaster", updateGroupMaster);
router.delete("/groupMaster", deleteGroupMaster);
router.get("/groupMaster", getGroupMaster);

// ITEM MASTER
router.post("/itemMaster", insertItemMaster);
router.patch("/itemMaster", updateItemMaster);
router.delete("/itemMaster", deleteItemMaster);
router.get("/itemMaster", getItemMaster);

// GST RATE MASTER
router.post("/gstRateMaster", insertGstRateMaster);
router.patch("/gstRateMaster", updateGstRateMaster);
router.delete("/gstRateMaster", deleteGstRateMaster);
router.get("/gstRateMaster", getGstRateMaster);

// SCRIPT MASTER
router.post("/scriptMaster", insertScriptMaster);
router.patch("/scriptMaster", updateScriptMaster);
router.delete("/scriptMaster", deleteScriptMaster);
router.get("/scriptMaster", getScriptMaster);

// STATE MASTER
router.post("/stateMaster", insertStateMaster);
router.patch("/stateMaster", updateStateMaster);
router.delete("/stateMaster", deleteStateMaster);
router.get("/stateMaster", getStateMaster);

// USER FORMS
router.post("/userForms", insertUserForms);
router.patch("/userForms", updateUserForms);
router.delete("/userForms", deleteUserForms);
router.get("/userForms", getUserForms);

// USERS
router.post("/users", insertUsers);
router.patch("/users", updateUsers);
router.delete("/users", deleteUsers);
router.get("/users", getUsers);

// EQUITY SALE PURCHASE
router.post("/equitySalePurchase", insertEquitySalePurchase);
router.patch("/equitySalePurchase", updateEquitySalePurchase);
router.delete("/equitySalePurchase", deleteEquitySalePurchase);
router.get("/equitySalePurchase", getEquitySalePurchase);

// YEAR MASTER
router.post("/yearMaster", insertYearMaster);
router.patch("/yearMaster", updateYearMaster);
router.delete("/yearMaster", deleteYearMaster);
router.get("/yearMaster", getYearMaster);

// TRANSACTION HEAD DETAILS
router.post("/transactionHeadDetails", insertTransactionHeadDetails);
router.patch("/transactionHeadDetails", updateTransactionHeadDetails);
router.delete("/transactionHeadDetails", deleteTransactionHeadDetails);
router.get("/transactionHeadDetails", getTransactionHeadDetails);

export default router;
