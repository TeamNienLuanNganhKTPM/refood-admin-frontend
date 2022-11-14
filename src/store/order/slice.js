/** @format */

import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {},
  reducers: {
    getAllOrders: (state, { payload }) => ({
      ...state,
      // ...payload,
    }),
    updateAllOrders: (state, { payload }) => ({
      ...state,
      pageNumber: payload.pageNum,
      orders: payload.orders,
    }),
    getOrderDetail: (state, { payload }) => ({
      ...state,
      // ...payload,
    }),
    updateOrderDetail: (state, { payload }) => ({
      ...state,
      orderDetail: payload.order_detail,
    }),
    updateOrder: (state, { payload }) => ({
      ...state,
      // ...payload,
    }),
    cancelOrder: (state, { payload }) => ({
      ...state,
    }),
    searchOrder: (state, { payload }) => ({
      ...state,
      orders: [],
    }),
  },
});

export const {
  getAllOrders,
  updateAllOrders,
  getOrderDetail,
  updateOrderDetail,
  updateOrder,
  cancelOrder,
  searchOrder,
} = orderSlice.actions;
export default orderSlice.reducer;
