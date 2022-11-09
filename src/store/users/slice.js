/** @format */

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    getAllUsers: (state, { payload }) => ({
      ...state,
      // ...payload,
    }),
    updateAllUsers: (state, { payload }) => ({
      ...state,
      pageNumberUser: payload.pageNum,
      users: payload.customers,
    }),
    getUserInfo: (state, { payload }) => ({
      ...state,
      // ...payload,
    }),
    updateUserInfo: (state, { payload }) => ({
      ...state,
      userInfo: payload.customer_info,
    }),
    updateStateUser: (state, { payload }) => ({
      ...state,
      // ...payload,
    }),
  },
});

export const {
  getAllUsers,
  updateAllUsers,
  getUserInfo,
  updateUserInfo,
  updateStateUser,
} = userSlice.actions;
export default userSlice.reducer;
