/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  handleAddFood,
  handleDeleteFood,
  handleGetAllComment,
  handleGetAllFoods,
  handleGetAllFoodsNew,
  handleGetAllFoodsPopular,
  handleGetFoodDetail,
  handleRelyComment,
  handleUpdateFoodDetail,
} from "./handlers";
import {
  addFoods,
  deleteFood,
  getAllComment,
  getAllFoods,
  getAllFoodsNew,
  getAllFoodsPopular,
  getFoodDetail,
  relyComment,
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
  yield takeLatest(getAllComment.type, handleGetAllComment);
  yield takeLatest(relyComment.type, handleRelyComment);
}
