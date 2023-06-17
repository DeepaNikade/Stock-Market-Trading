import { Route, Routes } from "react-router-dom";
import CompanyForm from "../pages/company/CompanyForm";
import CompanyRecords from "../pages/company/CompanyRecords";
import AccountMasterForm from "../pages/accountMaster/AccountMasterForm";
import AccountMasterRecords from "../pages/accountMaster/AccountMasterRecords";
import CompanySelection from "../pages/companySelection/companySelectionRecord";
import MenuBar from "../pages/menu/menuBar"
// import PurchaseForm from "../pages/purchase/purchase";

export const UsersRoutes = () => {
  return (
    <Routes>
      <Route path="/menuBar" element={<MenuBar />}/>
      <Route path="/companySelection" element={<CompanySelection/>}/>
      <Route path="/companyRecords" element={<CompanyRecords />} />
      <Route path="/companyForm" element={<CompanyForm />} />
      <Route path="/accountMasterRecords" element={<AccountMasterRecords/>}/>
      <Route path="/accountMasterForm" element={<AccountMasterForm />} />
      {/* <Route path="/purchase" element={<PurchaseForm/>}/> */}
    </Routes>
  );
};
