import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const getLocal = localStorage.getItem("user-info");
  if (getLocal) {
    const userEmail = JSON.parse(getLocal).user.email;
    if (userEmail) {
      return children;
    }
  }
  return <Navigate to="/signIn" state={{ from: location }} />;
};

export default PrivateRoute;
