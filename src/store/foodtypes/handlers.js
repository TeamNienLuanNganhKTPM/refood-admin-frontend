/** @format */

import {
  addFoodTypesApi,
  deleteFoodTypesApi,
  getAllFoodTypesApi,
  updateFoodTypesApi,
} from "api/foods";
import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import Swal from "sweetalert2";
import { getAllFoodTypes, updateAllFoodTypes } from "./slice";

function* handleGetAllFoodTypes() {
  try {
    const response = yield call(getAllFoodTypesApi);
    if (response.status === 200) {
      yield put(updateAllFoodTypes(response.data.foodtypes));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleDeleteFoodType({ payload }) {
  try {
    const response = yield call(deleteFoodTypesApi, payload);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: response.data.message,
        showConfirmButton: false,
        timer: 2500,
      });
      yield put(getAllFoodTypes());
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleAddFoodType({ payload }) {
  try {
    const response = yield call(addFoodTypesApi, payload);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: response.data.message,
        showConfirmButton: false,
        timer: 2500,
      });
      yield put(getAllFoodTypes());
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message, {
      position: "bottom-right",
    });
  }
}

function* handleUpdateFoodType({ payload }) {
  try {
    const response = yield call(updateFoodTypesApi, payload);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: response.data.message,
        showConfirmButton: false,
        timer: 2500,
      });
      yield put(getAllFoodTypes());
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message, {
      position: "bottom-right",
    });
  }
}

export {
  handleGetAllFoodTypes,
  handleDeleteFoodType,
  handleAddFoodType,
  handleUpdateFoodType,
};
