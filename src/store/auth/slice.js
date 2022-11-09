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
  },
});

export const {
  authLogin,
  authUpdate,
  authLogOut,
  getAnalysicAllTime,
  updateAnalysic,
  getAnalysicTimeWithMonthYear,
} = authSlice.actions;
export default authSlice.reducer;
