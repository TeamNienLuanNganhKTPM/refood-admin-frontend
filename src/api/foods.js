/** @format */

import instance from "api";

export const getAllFoodsApi = async (data) => {
  const { pageCur, numOnPage } = data;
  return await instance.request({
    method: "GET",
    url: `/admin/management/food/get-foods/${pageCur}/${numOnPage}`,
  });
};

export const deleteFoodApi = async (data) => {
  console.log("deleteFoodApi ~ data", data);
  return await instance.request({
    method: "DELETE",
    data: data,
    url: "/admin/management/food/food-delete",
  });
};

export const addFoodAdminApi = async (data) => {
  return await instance.request({
    method: "POST",
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
    url: `/admin/management/food/food-add`,
  });
};
