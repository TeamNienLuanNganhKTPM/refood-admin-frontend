/** @format */

import { addFoodAdminApi, deleteFoodApi, getAllFoodsApi } from "api/foods";
import { call, put } from "redux-saga/effects";
import Swal from "sweetalert2";
import { getAllFoods, updateAllFoods } from "./slice";

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
      yield put(getAllFoods());
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleAddFood({ payload }) {
  console.log("function*handleAddFood ~ payload", payload);
  try {
    const response = yield call(addFoodAdminApi, payload);
    console.log("function*handleAddFood ~ response", response);
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

export { handleGetAllFoods, handleDeleteFood, handleAddFood };
