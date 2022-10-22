/** @format */

import authSlice from "./auth/slice";
import foodTypesSlice from "./foodtypes/slice";
const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
  auth: authSlice,
  foodTypes: foodTypesSlice,
});
