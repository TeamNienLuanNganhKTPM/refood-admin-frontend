/** @format */

import {
  addFoodAdminApi,
  deleteFoodApi,
  getAllFoodsApi,
  getFoodDetailApi,
  updateFoodAdminApi,
} from "api/foods";
import { foodsPage } from "constants/constants";
import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import Swal from "sweetalert2";
import { checkState, updateAllFoods, updateFoodDetail } from "./slice";

function* handleGetAllFoods({ payload }) {
  try {
    const response = yield call(getAllFoodsApi, payload);
    if (response.status === 200) {
      yield put(updateAllFoods(response.data));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleDeleteFood({ payload }) {
  try {
    const response = yield call(deleteFoodApi, payload);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: response.data.message,
        showConfirmButton: false,
        timer: 2500,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleAddFood({ payload }) {
  try {
    const response = yield call(addFoodAdminApi, payload);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
      // setTimeout(() => {
      //   window.location.reload();
      // }, 2000);
      yield put(checkState(response.data.success));
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message, {
      position: "top-right",
    });
  }
}

function* handleGetFoodDetail({ payload }) {
  try {
    const response = yield call(getFoodDetailApi, payload);
    if (response.status === 200) {
      yield put(updateFoodDetail(response.data.food_info));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleUpdateFoodDetail({ payload }) {
  try {
    const response = yield call(updateFoodAdminApi, payload);
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
      yield put(checkState(response.data.success));
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message, {
      position: "top-right",
    });
  }
}

export {
  handleGetAllFoods,
  handleDeleteFood,
  handleAddFood,
  handleGetFoodDetail,
  handleUpdateFoodDetail,
};
