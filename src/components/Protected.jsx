import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protected() {
  const token = localStorage.getItem("token");
  return (
    <div>
      token ? <Outlet /> : <Navigate to="/register" />
    </div>
  );
}

export default Protected;
