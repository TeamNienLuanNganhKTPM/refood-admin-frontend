/** @format */

import { getAllOrdersApi, getOrderDetailApi } from "api/order";
import { call, put } from "redux-saga/effects";
import { updateAllOrders, updateOrderDetail } from "./slice";

function* handleGetAllOrders({ payload }) {
  try {
    const response = yield call(getAllOrdersApi, payload);
    if (response.status === 200) {
      yield put(updateAllOrders(response.data));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleGetOrderDetail({ payload }) {
  try {
    const response = yield call(getOrderDetailApi, payload);
    if (response.status === 200) {
      yield put(updateOrderDetail(response.data));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

export { handleGetAllOrders, handleGetOrderDetail };
