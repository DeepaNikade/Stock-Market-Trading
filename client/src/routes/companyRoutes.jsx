import {Route,Routes} from "react-router-dom";
import companyForm from "../pages/company/companyForm";
import companyRecords from "../pages/company/companyRecords";

export const CompanyRoutes = () => {
    return (
        <Routes>
            <Route path = "/companyRecords" element = {<companyRecords/>} />
            <Route path = "/companyForm" element = {<companyForm/>} />

        </Routes>
    );
};