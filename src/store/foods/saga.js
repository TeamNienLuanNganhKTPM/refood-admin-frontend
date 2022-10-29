/** @format */

import { takeLatest } from "redux-saga/effects";
import { handleAddFood, handleDeleteFood, handleGetAllFoods } from "./handlers";
import { addFood, deleteFood, getAllFoods } from "./slice";

export default function* foodsWatcher() {
  yield takeLatest(getAllFoods.type, handleGetAllFoods);
  yield takeLatest(deleteFood.type, handleDeleteFood);
  yield takeLatest(addFood.type, handleAddFood);
}
