/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useLocalStorage("user");

  if (!user?.token) {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute;
