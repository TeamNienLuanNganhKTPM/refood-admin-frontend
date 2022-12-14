/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  handleCancelOrder,
  handleGetAllOrders,
  handleGetOrderDetail,
  handleSearchOrder,
  handleUpdateOrder,
} from "./handlers";
import {
  cancelOrder,
  getAllOrders,
  getOrderDetail,
  searchOrder,
  updateOrder,
} from "./slice";

export default function* ordersWatcher() {
  yield takeLatest(getAllOrders.type, handleGetAllOrders);
  yield takeLatest(getOrderDetail.type, handleGetOrderDetail);
  yield takeLatest(updateOrder.type, handleUpdateOrder);
  yield takeLatest(cancelOrder.type, handleCancelOrder);
  yield takeLatest(searchOrder.type, handleSearchOrder);
}
