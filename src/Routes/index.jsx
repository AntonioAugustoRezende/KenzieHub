import { Route, Routes } from "react-router-dom";
import { ProtectRoute } from "../Components/ProtectRoute";
import { DashboardPage } from "../Pages/Dashboard";
import { LoginPage } from "../Pages/Login";
import { RegisterPage } from "../Pages/Register";

export const RouteMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectRoute />}>
        <Route path="/user/:id" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};
