/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  handleAddFood,
  handleDeleteFood,
  handleGetAllFoods,
  handleGetAllFoodsNew,
  handleGetAllFoodsPopular,
  handleGetFoodDetail,
  handleUpdateFoodDetail,
} from "./handlers";
import {
  addFoods,
  deleteFood,
  getAllFoods,
  getAllFoodsNew,
  getAllFoodsPopular,
  getFoodDetail,
  updateFood,
} from "./slice";

export default function* foodsWatcher() {
  yield takeLatest(getAllFoods.type, handleGetAllFoods);
  yield takeLatest(deleteFood.type, handleDeleteFood);
  yield takeLatest(addFoods.type, handleAddFood);
  yield takeLatest(getFoodDetail.type, handleGetFoodDetail);
  yield takeLatest(updateFood.type, handleUpdateFoodDetail);
  yield takeLatest(getAllFoodsPopular.type, handleGetAllFoodsPopular);
  yield takeLatest(getAllFoodsNew.type, handleGetAllFoodsNew);
}
