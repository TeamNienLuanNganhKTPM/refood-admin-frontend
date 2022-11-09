/** @format */

import instance from "api";

export const getAnalysicAllTime = async () => {
  return await instance.request({
    method: "GET",
    url: "/admin/analysis",
  });
};

export const getAnalysicTimeWithMolthYear = async (param) => {
  return await instance.request({
    method: "GET",
    data: param,
    url: `/admin/analysis/${param}`,
  });
};
