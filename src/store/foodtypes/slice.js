/** @format */

import { createSlice } from "@reduxjs/toolkit";

const foodTypeSlice = createSlice({
  name: "foodTypes",
  initialState: {},
  reducers: {
    getAllFoodTypes: (state) => ({
      ...state,
    }),
    updateAllFoodTypes: (state, { payload }) => ({
      ...state,
      foodtypes: payload,
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
