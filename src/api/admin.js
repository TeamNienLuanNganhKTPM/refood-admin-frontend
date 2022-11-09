/** @format */

import instance from "api";

export const loginAdminApi = async (admin) => {
  return await instance.request({
    method: "POST",
    data: admin,
    url: "/admin/auth/login",
  });
};

export const getInfoAdminApi = async () => {
  return await instance.request({
    method: "GET",
    url: "/admin/auth/info",
  });
};

export const changePasswordApi = async (data) => {
  return await instance.request({
    method: "PUT",
    data: data,
    url: `/admin/auth/update/password`,
  });
};
