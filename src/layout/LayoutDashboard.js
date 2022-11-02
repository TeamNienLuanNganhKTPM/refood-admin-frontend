/** @format */

import React, { useEffect } from "react";
import Overlay from "components/common/Overlay";
import ErrorComponent from "components/common/ErrorComponent";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import { withErrorBoundary } from "react-error-boundary";
import { Outlet, useNavigate } from "react-router-dom";

const LayoutDashboard = () => {
  const token = window.localStorage.getItem("accessToken");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);
  return (
    <div className="min-h-screen p-10 bg-lite">
      <Overlay></Overlay>
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1 bg-white rounded-md shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] p-[30px]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default withErrorBoundary(LayoutDashboard, {
  FallbackComponent: ErrorComponent,
});
