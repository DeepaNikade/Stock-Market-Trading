import { Route, Routes } from "react-router-dom";
import ScriptMasterForm from "../pages/scriptMaster/scriptMasterForm";

import ScriptMasterRecord from "../pages/scriptMaster/scriptMasterRecord";

export const ScriptMasterRoutes = () => {
  return (
    <Routes>
         <Route path="/scriptMasterForm" element={<ScriptMasterForm/>} />
       <Route path="/scriptMasterRecords" element={<ScriptMasterRecord/>} />
    </Routes>
  );
};
