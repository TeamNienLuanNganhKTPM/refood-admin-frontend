/** @format */

import instance from "api";

export const getAllOrdersApi = async (data) => {
  const { pageCur, numOnPage } = data;
  return await instance.request({
    method: "GET",
    url: `/admin/management/order/get-food-orders/${pageCur}/${numOnPage}`,
  });
};

export const getOrderDetailApi = async (param) => {
  return await instance.request({
    method: "GET",
    url: `/admin/management/order/get-food-order-detail/${param}`,
  });
};

export const updateOrderAdminApi = async (data) => {
  return await instance.request({
    method: "PUT",
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
    url: `/admin/management/order/update-food-order`,
  });
};

export const cancelOrderAdminApi = async (data) => {
  return await instance.request({
    method: "PUT",
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
    url: `/admin/management/order/cancel-order`,
  });
};

export const searchOrderApi = async (param) => {
  return await instance.request({
    method: "GET",
    url: `/admin/management/order/filter/${param}`,
  });
};
