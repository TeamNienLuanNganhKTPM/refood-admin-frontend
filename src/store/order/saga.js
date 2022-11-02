/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  handleGetAllOrders,
  handleGetOrderDetail,
  handleUpdateOrder,
} from "./handlers";
import { getAllOrders, getOrderDetail, updateOrder } from "./slice";

export default function* ordersWatcher() {
  yield takeLatest(getAllOrders.type, handleGetAllOrders);
  yield takeLatest(getOrderDetail.type, handleGetOrderDetail);
  yield takeLatest(updateOrder.type, handleUpdateOrder);
}
