/** @format */

import instance from "api";

export const loginAdminApi = async (admin) => {
  return await instance.request({
    method: "POST",
    data: admin,
    url: "/admin/auth/login",
  });
};
