/** @format */

import {
  cancelOrderAdminApi,
  getAllOrdersApi,
  getOrderDetailApi,
  searchOrderApi,
  updateOrderAdminApi,
} from "api/order";
import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import Swal from "sweetalert2";
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

function* handleUpdateOrder({ payload }) {
  try {
    const response = yield call(updateOrderAdminApi, payload);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message, {
      position: "top-right",
    });
  }
}

function* handleCancelOrder({ payload }) {
  try {
    const response = yield call(cancelOrderAdminApi, payload);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message, {
      position: "top-right",
    });
  }
}

function* handleSearchOrder({ payload }) {
  try {
    const response = yield call(searchOrderApi, payload);
    if (response.status === 200) {
      yield put(updateAllOrders(response.data));
    }
  } catch (error) {
    console.log(error);
  }
}

export {
  handleGetAllOrders,
  handleGetOrderDetail,
  handleUpdateOrder,
  handleCancelOrder,
  handleSearchOrder,
};
