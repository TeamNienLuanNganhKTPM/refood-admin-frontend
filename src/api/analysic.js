/** @format */

import instance from "api";

export const getAnalysicAllTime = async () => {
  return await instance.request({
    method: "GET",
    url: "/admin/analysis",
  });
};

export const getAnalysicTimeWithMolthYear = async ({ data }) => {
  return await instance.request({
    method: "GET",
    url: `/admin/analysis/${data?.month}/${data?.year}`,
  });
};
