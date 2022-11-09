/** @format */

import LayoutDashboardTable from "layout/LayoutDashboardTable";
import AuthChangePassword from "modules/auth/AuthChangePassword";
import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { infoAdmin } = useSelector((state) => state.auth);
  return (
    <LayoutDashboardTable title="Thông tin admin">
      <div className="flex items-center justify-end gap-5 py-4">
        <div className="flex items-center justify-start gap-3">
          <strong>Họ và tên:</strong>
          <span className="text-lg font-medium text-text2">
            {infoAdmin?.AdminName}
          </span>
        </div>
        <div className="flex items-center justify-start gap-3">
          <strong>Số điện thoại:</strong>
          <span className="text-lg font-medium text-text2">
            {infoAdmin?.AdminPhoneNumber}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <h3 className="text-2xl font-semibold text-center uppercase text-text1">
          Đổi mật khẩu
        </h3>
        <div className="flex items-center justify-center">
          <AuthChangePassword></AuthChangePassword>
        </div>
      </div>
    </LayoutDashboardTable>
  );
};

export default ProfilePage;
