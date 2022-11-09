/** @format */

import instance from "api";

export const getAllFoodsApi = async (data) => {
  const { pageCur, numOnPage } = data;
  return await instance.request({
    method: "GET",
    url: `/admin/management/food/get-foods/${pageCur}/${numOnPage}`,
  });
};

export const getAllPopularFoodApi = async (data) => {
  const { pageCur, numOnPage } = data;
  return await instance.request({
    method: "GET",
    url: `/food/get-popular-foods/${pageCur}/${numOnPage}`,
  });
};

export const getAllNewFoodApi = async (data) => {
  const { pageCur, numOnPage } = data;
  return await instance.request({
    method: "GET",
    url: `/food/get-new-foods/${pageCur}/${numOnPage}`,
  });
};

export const deleteFoodApi = async (data) => {
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

export const getFoodDetailApi = async (param) => {
  return await instance.request({
    method: "GET",
    url: `/admin/management/food/food-detail/${param}`,
  });
};

export const updateFoodAdminApi = async (data) => {
  return await instance.request({
    method: "PUT",
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
    url: `/admin/management/food/food-edit`,
  });
};

export const getAllCommentsApi = async (data) => {
  const { pageCur, numOnPage } = data;
  return await instance.request({
    method: "GET",
    url: `/admin/management/comment/get-unreply-comments/${numOnPage}/${pageCur}`,
  });
};

export const relyCommentApi = async (data) => {
  return await instance.request({
    method: "POST",
    data: data,
    url: `/admin/management/comment/reply`,
  });
};
