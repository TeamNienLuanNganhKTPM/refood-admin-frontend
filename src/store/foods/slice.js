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
    }),
    deleteFood: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    addFood: (state, action) => {
      return {
        ...state,
      };
    },
    updateFood: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
});

export const { getAllFoods, updateAllFoods, deleteFood, addFood, updateFood } =
  foodSlice.actions;
export default foodSlice.reducer;
