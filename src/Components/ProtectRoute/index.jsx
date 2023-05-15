import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

export const ProtectRoute = () => {
  const { user, userLoading } = useContext(UserContext);
  if (userLoading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to={"/"} />;
};
