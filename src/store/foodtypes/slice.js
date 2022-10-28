/** @format */

import { createSlice } from "@reduxjs/toolkit";

const foodTypeSlice = createSlice({
  name: "foodTypes",
  initialState: {},
  reducers: {
    getAllFoodTypes: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    updateAllFoodTypes: (state, { payload }) => ({
      ...state,
      pageNumber: payload.pageNum,
      foodtypes: payload.foodtypes,
    }),
    deleteFoodType: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    addFoodType: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    updateTypeFood: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
});

export const {
  getAllFoodTypes,
  updateAllFoodTypes,
  deleteFoodType,
  addFoodType,
  updateTypeFood,
} = foodTypeSlice.actions;
export default foodTypeSlice.reducer;
