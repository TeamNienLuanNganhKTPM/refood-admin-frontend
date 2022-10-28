/** @format */

import { takeLatest } from "redux-saga/effects";
import { handleDeleteFood, handleGetAllFoods } from "./handlers";
import { deleteFood, getAllFoods } from "./slice";

export default function* foodsWatcher() {
  yield takeLatest(getAllFoods.type, handleGetAllFoods);
  yield takeLatest(deleteFood.type, handleDeleteFood);
}
