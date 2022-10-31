/** @format */

import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "foods",
  initialState: {},
  reducers: {
    getAllFoods: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    updateAllFoods: (state, { payload }) => ({
      ...state,
      pageNumber: payload.pageNum,
      foods: payload.foods,
      success: false,
    }),
    addFoods: (state, { payload }) => ({
      ...state,
      success: false,
    }),
    checkState: (state, { payload }) => ({
      success: payload,
    }),
    deleteFood: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    getFoodDetail: (state, { payload }) => ({
      ...state,
    }),
    updateFoodDetail: (state, { payload }) => ({
      ...state,
      foodDetail: payload,
    }),
    updateFood: (state, { payload }) => ({
      ...state,
      success: false,
    }),
  },
});

export const {
  getAllFoods,
  updateAllFoods,
  deleteFood,
  addFoods,
  checkState,
  getFoodDetail,
  updateFoodDetail,
  updateFood,
} = foodSlice.actions;
export default foodSlice.reducer;
