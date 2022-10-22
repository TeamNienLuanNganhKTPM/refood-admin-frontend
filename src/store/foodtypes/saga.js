/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  handleAddFoodType,
  handleDeleteFoodType,
  handleGetAllFoodTypes,
  handleUpdateFoodType,
} from "./handlers";
import {
  addFoodType,
  deleteFoodType,
  getAllFoodTypes,
  updateTypeFood,
} from "./slice";

export default function* foodTypesWatcher() {
  yield takeLatest(getAllFoodTypes.type, handleGetAllFoodTypes);
  yield takeLatest(addFoodType.type, handleAddFoodType);
  yield takeLatest(deleteFoodType.type, handleDeleteFoodType);
  yield takeLatest(updateTypeFood.type, handleUpdateFoodType);
}
