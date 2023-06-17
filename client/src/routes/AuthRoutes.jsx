import { Route, Routes } from "react-router-dom";
import LoginIn from "../pages/login/login";
import ForgotPassword from "../pages/forgotPassword/forgotPassword";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/Login" element={<LoginIn />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
};
