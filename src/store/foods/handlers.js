/** @format */

import {
  addFoodAdminApi,
  deleteFoodApi,
  getAllCommentsApi,
  getAllFoodsApi,
  getAllNewFoodApi,
  getAllPopularFoodApi,
  getFoodDetailApi,
  relyCommentApi,
  updateFoodAdminApi,
} from "api/foods";
import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import Swal from "sweetalert2";
import {
  checkState,
  updateAllComment,
  updateAllFoods,
  updateAllFoodsNew,
  updateAllFoodsPopular,
  updateFoodDetail,
} from "./slice";

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

function* handleGetAllFoodsPopular({ payload }) {
  try {
    const response = yield call(getAllPopularFoodApi, payload);
    if (response.status === 200) {
      yield put(updateAllFoodsPopular(response.data));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleGetAllFoodsNew({ payload }) {
  try {
    const response = yield call(getAllNewFoodApi, payload);
    if (response.status === 200) {
      yield put(updateAllFoodsNew(response.data));
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

function* handleGetAllComment({ payload }) {
  try {
    const response = yield call(getAllCommentsApi, payload);
    if (response.status === 200) {
      yield put(updateAllComment(response.data));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleRelyComment({ payload }) {
  try {
    const response = yield call(relyCommentApi, payload);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
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
  handleGetAllFoodsPopular,
  handleGetAllFoodsNew,
  handleGetAllComment,
  handleRelyComment,
};
