import { Route, Routes } from "react-router-dom";
import CompanyForm from "../pages/company/CompanyForm";
import CompanyRecords from "../pages/company/CompanyRecords";
import AccountMasterForm from "../pages/accountMaster/AccountMasterForm";
import AccountMasterRecords from "../pages/accountMaster/AccountMasterRecords";
import CompanySelection from "../pages/companySelection/companySelectionRecord";
import MenuBar from "../pages/menu/menuBar";
import ItemMasterRecords from "../pages/itemMaster/itemMasterRecords";
import ItemMasterForm from "../pages/itemMaster/itemMasterForm";
import StateMasterForm from "../pages/stateMaster/stateMasterForm";
import StateMasterRecords from "../pages/stateMaster/stateMasterRecords";
import GroupMasterForm from "../pages/groupMaster/groupMasterForm";
import GroupMasterRecords from "../pages/groupMaster/groupMasterRecords";
import GstRateMasterForm from "../pages/gstRateMaster/gstRateMasterForm";
import GstRateMasterRecords from "../pages/gstRateMaster/gstRateMasterRecords";
import ExpiryMasterForm from "../pages/expiryMaster/expiryMasterForm";
import ExpiryMasterRecords from "../pages/expiryMaster/expiryMasterRecords";
import ScriptMasterForm from "../pages/scriptMaster/scriptMasterForm";
import ScriptMasterRecords from "../pages/scriptMaster/scriptMasterRecord";
import EquitySalePurchaseForm from "../pages/equitySalePurchase/equitySalePurchaseForm";
import EquitySalePurchaseRecords from "../pages/equitySalePurchase/equitySalePurchaseRecords";
import TransactionForm from "../pages/transactionHeadDetail/transactionHeadDetailForm";
import EquityPurchaseRegisterReport from "../pages/reports/equityPurschaseRegisterReport";
import EquitySaleRegisterReport from "../pages/reports/equitySaleRegisterReport";
import EquityReport from "../pages/reports/equityReport";
import FutureOptionReport from "../pages/reports/futureOptionReport";
import CommoditiesReport from "../pages/reports/commoditiesReport";
export const UsersRoutes = () => {
  return (
    <Routes>
      <Route path="/menuBar" element={<MenuBar />}/>
      <Route path="/companySelection" element={<CompanySelection/>}/>
      <Route path="/companyRecords" element={<CompanyRecords />} />
      <Route path="/companyForm" element={<CompanyForm />} />
      <Route path="/accountMasterRecords" element={<AccountMasterRecords/>}/>
      <Route path="/accountMasterForm" element={<AccountMasterForm />} />
      <Route path="/groupMasterForm" element={<GroupMasterForm/>}/>
      <Route path="/groupMasterRecords" element={<GroupMasterRecords/>}/>
      <Route path="/itemMasterForm" element={<ItemMasterForm />} />
      <Route path="/itemMasterRecords" element={<ItemMasterRecords />} />
      <Route path="/gstRateMasterForm" element={<GstRateMasterForm/>}/>
      <Route path="/gstRateMasterRecords" element={<GstRateMasterRecords/>}/>
      <Route path="/stateMasterForm" element={<StateMasterForm />} />
      <Route path="/stateMasterRecords" element={<StateMasterRecords />} />
      <Route path="/expiryMasterForm" element={<ExpiryMasterForm />} />
      <Route path="/expiryMasterRecords" element={<ExpiryMasterRecords />} />
      <Route path="/scriptMasterForm" element={<ScriptMasterForm />} />
      <Route path="/scriptMasterRecord" element={<ScriptMasterRecords />} />
      <Route path="/equitySalePurchaseForm" element={<EquitySalePurchaseForm />} />
      <Route path="/equitySalePurchaseRecords" element={<EquitySalePurchaseRecords />} />
      <Route path="/transactionHeadDetailsForm" element={<TransactionForm />} />
      <Route path="/equityPurchaseRegisterReport" element={<EquityPurchaseRegisterReport />} />
      <Route path="/equitySaleRegisterReport" element={<EquitySaleRegisterReport />} />
      <Route path="/equityReport" element={<EquityReport />} />
      <Route path="/futureOptionReport" element={<FutureOptionReport />} />
      <Route path="/commoditiesReport" element={<CommoditiesReport />} />



    </Routes>
  );
};
