/** @format */

import instance from "api";

export const getAllFoodTypesApi = async () => {
  return await instance.request({
    method: "GET",
    url: "/admin/management/food/get-foodtypes",
  });
};

export const deleteFoodTypesApi = async (data) => {
  return await instance.request({
    method: "DELETE",
    data: data,
    url: "/admin/management/food/food-type-delete",
  });
};

export const addFoodTypesApi = async (data) => {
  return await instance.request({
    method: "POST",
    data: data,
    url: "/admin/management/food/food-type-add",
  });
};

export const updateFoodTypesApi = async (data) => {
  return await instance.request({
    method: "PUT",
    data: data,
    url: "/admin/management/food/food-type-edit",
  });
};
