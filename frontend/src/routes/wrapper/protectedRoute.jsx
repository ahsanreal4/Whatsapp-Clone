import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../../context/globalContext/globalContext";
import { PAGES } from "../../data/pages";

const ProtectedRoute = () => {
  const { user } = useGlobalContext();

  return user ? <Outlet /> : <Navigate to={PAGES.WELCOME} />;
};

export default ProtectedRoute;
