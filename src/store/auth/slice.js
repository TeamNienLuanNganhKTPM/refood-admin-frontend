/** @format */

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    admin: undefined,
    accessToken: null,
  },
  reducers: {
    authLogin: (state, { payload }) => {
      console.log("payload", payload);
      return {
        ...state,
        ...payload,
      };
    },
    authUpdate: (state, { payload }) => ({
      ...state,
      admin: payload.admin_info,
      accessToken: payload.admin_access_token,
    }),
    authLogOut: (state, action) => ({}),
    getAnalysicAllTime: (state, { payload }) => ({
      ...state,
    }),
    getAnalysicTimeWithMonthYear: (state, { payload }) => ({
      ...state,
    }),
    updateAnalysic: (state, { payload }) => ({
      ...state,
      analysis: payload,
    }),
    getInfoAdmin: (state, { payload }) => ({
      ...state,
    }),
    updateInfoAdmin: (state, { payload }) => ({
      ...state,
      infoAdmin: payload,
    }),
    changePasswordAdmin: (state, { payload }) => ({
      ...state,
    }),
    getDataChartMonthYear: (state, { payload }) => ({
      ...state,
    }),
    getDataChartYear: (state, { payload }) => ({
      ...state,
    }),
    updateRevenue: (state, { payload }) => ({
      ...state,
      revenue: payload,
    }),
  },
});

export const {
  authLogin,
  authUpdate,
  authLogOut,
  getAnalysicAllTime,
  updateAnalysic,
  getAnalysicTimeWithMonthYear,
  getInfoAdmin,
  updateInfoAdmin,
  changePasswordAdmin,
  getDataChartMonthYear,
  getDataChartYear,
  updateRevenue,
} = authSlice.actions;
export default authSlice.reducer;
