/** @format */

import { takeLatest } from "redux-saga/effects";
import { handleGetAllOrders, handleGetOrderDetail } from "./handlers";
import { getAllOrders, getOrderDetail } from "./slice";

export default function* ordersWatcher() {
  yield takeLatest(getAllOrders.type, handleGetAllOrders);
  yield takeLatest(getOrderDetail.type, handleGetOrderDetail);
}
