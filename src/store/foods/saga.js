/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  handleAddFood,
  handleDeleteFood,
  handleGetAllFoods,
  handleGetFoodDetail,
  handleUpdateFoodDetail,
} from "./handlers";
import {
  addFoods,
  deleteFood,
  getAllFoods,
  getFoodDetail,
  updateFood,
} from "./slice";

export default function* foodsWatcher() {
  yield takeLatest(getAllFoods.type, handleGetAllFoods);
  yield takeLatest(deleteFood.type, handleDeleteFood);
  yield takeLatest(addFoods.type, handleAddFood);
  yield takeLatest(getFoodDetail.type, handleGetFoodDetail);
  yield takeLatest(updateFood.type, handleUpdateFoodDetail);
}
