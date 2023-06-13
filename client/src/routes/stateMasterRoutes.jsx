import { Route, Routes } from "react-router-dom";
import StateMasterForm from "../pages/stateMaster/stateMasterForm";
import StateMasterRecord from "../pages/stateMaster/stateMasterRecord";

export const StateMasterRoutes = () => {
  return (
    <Routes>
         <Route path="/stateMasterForm" element={<StateMasterForm />} />
       <Route path="/stateMasterRecords" element={<StateMasterRecord />} />
    </Routes>
  );
};
