/** @format */

import instance from "api";

export const getAllUsersApi = async (data) => {
  const { pageCur, numOnPage } = data;
  return await instance.request({
    method: "GET",
    url: `/admin/management/user/users/${pageCur}/${numOnPage}`,
  });
};

export const getUserInfoApi = async (param) => {
  return await instance.request({
    method: "GET",
    url: `/admin/management/user/user-info/${param}`,
  });
};

export const updateStateUserApi = async (data) => {
  return await instance.request({
    method: "PUT",
    data: data,
    url: `/admin/management/user/user-active`,
  });
};
