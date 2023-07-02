import { Router } from "express";

import {
  //ACCOUNT MASTER
  insertAccountMaster,
  updateAccountMaster,
  deleteAccountMaster,
  getAccountMaster,
  getAllAccountMaster,

  // COMPANY
  insertCompany,
  updateCompany,
  deleteCompany,
  getCompany,
  getAllCompany,

  // EXPIRY MASTER
  insertExpiryMaster,
  updateIntoExpiryMaster,
  deleteExpiryMaster,
  getExpiryMaster,
  getAllExpiryMaster,

  // GROUP MASTER
  insertGroupMaster,
  updateGroupMaster,
  deleteGroupMaster,
  getGroupMaster,
  getAllGroupMaster,

  // ITEM MASTER
  insertItemMaster,
  updateItemMaster,
  deleteItemMaster,
  getItemMaster,
  getAllItemMaster,

  // GST RATE MASTER
  insertGstRateMaster,
  updateGstRateMaster,
  deleteGstRateMaster,
  getGstRateMaster,
  getAllGstRateMaster,

  // SCRIPT MASTER
  insertScriptMaster,
  updateScriptMaster,
  deleteScriptMaster,
  getScriptMaster,
  getAllScriptMaster,

  // STATE MASTER
  insertStateMaster,
  updateStateMaster,
  deleteStateMaster,
  getStateMaster,
  getAllStateMaster,

  // USER FORMS
  insertUserForms,
  updateUserForms,
  deleteUserForms,
  getUserForms,
  getAllUserForms,

  // USERS
  insertUsers,
  updateUsers,
  deleteUsers,
  getUsers,
  getAllUsers,

  // EQUITY SALE PURCHASE
  insertEquitySalePurchase,
  updateEquitySalePurchase,
  deleteEquitySalePurchase,
  getEquitySalePurchase,
  getAllEquitySalePurchase,

  // YEAR MASTER
  insertYearMaster,
  updateYearMaster,
  deleteYearMaster,
  getYearMaster,
  getAllYearMaster,

  // TRANSACTION HEAD DEATILS
  insertTransactionHeadDetails,
  updateTransactionHeadDetails,
  deleteTransactionHeadDetails,
  getTransactionHeadDetails,
  getAllTransactionHeadDetails,
} from "../controller/user.controller.js";

const router = Router();

// ACCOUNT MASTER
router.post("/accountMaster", insertAccountMaster);
router.patch("/accountMaster", updateAccountMaster);
router.post("/accountMaster/delete", deleteAccountMaster);
router.get("/accountMaster", getAccountMaster);
router.get("/accountMaster/all", getAllAccountMaster);

// COMPANY
router.post("/company", insertCompany);
router.patch("/company", updateCompany);
router.post("/company/delete", deleteCompany);
router.get("/company", getCompany);
router.get("/company/all", getAllCompany);

// EXPIRY MASTER
router.post("/expiryMaster", insertExpiryMaster);
router.patch("/expiryMaster", updateIntoExpiryMaster);
router.post("/expiryMaster/delete", deleteExpiryMaster);
router.get("/expiryMaster", getExpiryMaster);
router.get("/expiryMaster/all", getAllExpiryMaster);

// GROUP MASTER
router.post("/groupMaster", insertGroupMaster);
router.patch("/groupMaster", updateGroupMaster);
router.post("/groupMaster/delete", deleteGroupMaster);
router.get("/groupMaster", getGroupMaster);
router.get("/groupMaster/all", getAllGroupMaster);

// ITEM MASTER
router.post("/itemMaster", insertItemMaster);
router.patch("/itemMaster", updateItemMaster);
router.post("/itemMaster/delete", deleteItemMaster);
router.get("/itemMaster", getItemMaster);
router.get("/itemmaster/all", getAllItemMaster);

// GST RATE MASTER
router.post("/gstRateMaster", insertGstRateMaster);
router.patch("/gstRateMaster", updateGstRateMaster);
router.post("/gstRateMaster/delete", deleteGstRateMaster);
router.get("/gstRateMaster", getGstRateMaster);
router.get("/gstRateMaster/all", getAllGstRateMaster);

// SCRIPT MASTER
router.post("/scriptMaster", insertScriptMaster);
router.patch("/scriptMaster", updateScriptMaster);
router.post("/scriptMaster/delete", deleteScriptMaster);
router.get("/scriptMaster", getScriptMaster);
router.get("/scriptmaster/all", getAllScriptMaster);

// STATE MASTER
router.post("/stateMaster", insertStateMaster);
router.patch("/stateMaster", updateStateMaster);
router.post("/stateMaster/delete", deleteStateMaster);
router.get("/stateMaster", getStateMaster);
router.get("/stateMaster/all", getAllStateMaster);

// USER FORMS
router.post("/userForms", insertUserForms);
router.patch("/userForms", updateUserForms);
router.post("/userForms/delete", deleteUserForms);
router.get("/userForms", getUserForms);
router.get("/userForms/all", getAllUserForms);

// USERS
router.post("/users", insertUsers);
router.patch("/users", updateUsers);
router.post("/users/delete", deleteUsers);
router.get("/users", getUsers);
router.get("/users/all", getAllUsers);

// EQUITY SALE PURCHASE
router.post("/equitySalePurchase", insertEquitySalePurchase);
router.patch("/equitySalePurchase", updateEquitySalePurchase);
router.post("/equitySalePurchase/delete", deleteEquitySalePurchase);
router.get("/equitySalePurchase", getEquitySalePurchase);
router.get("/equitySalePurchase/all", getAllEquitySalePurchase);

// YEAR MASTER
router.post("/yearMaster", insertYearMaster);
router.patch("/yearMaster", updateYearMaster);
router.post("/yearMaster/delete", deleteYearMaster);
router.get("/yearMaster", getYearMaster);
router.get("/yearMaster/all", getAllYearMaster);

// TRANSACTION HEAD DETAILS
router.post("/transactionHeadDetails", insertTransactionHeadDetails);
router.patch("/transactionHeadDetails", updateTransactionHeadDetails);
router.post("/transactionHeadDetails/delete", deleteTransactionHeadDetails);
router.get("/transactionHeadDetails", getTransactionHeadDetails);
router.get("/transactionHeadDetails/all", getAllTransactionHeadDetails);
// router.get("/transactionHeadDetails/all",get)

export default router;
