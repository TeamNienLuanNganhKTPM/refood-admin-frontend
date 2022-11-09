/** @format */

import instance from "api";

export const getAllPartysApi = async (data) => {
  const { pageCur, numOnPage } = data;
  return await instance.request({
    method: "GET",
    url: `/admin/management/party/get-party-orders/${pageCur}/${numOnPage}`,
  });
};

export const getPartyDetailApi = async (param) => {
  return await instance.request({
    method: "GET",
    data: param,
    url: `/admin/management/party/get-party-order-detail/${param}`,
  });
};

export const updatePartyAdminApi = async (data) => {
  return await instance.request({
    method: "PUT",
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
    url: `/admin/management/party/update-party-order`,
  });
};

export const cancelPartyAdminApi = async (data) => {
  return await instance.request({
    method: "PUT",
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
    url: `/admin/management/party/cancel-order`,
  });
};
