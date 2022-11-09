/** @format */

import authSlice from "./auth/slice";
import foodTypesSlice from "./foodtypes/slice";
import foodSlice from "./foods/slice";
import ordersSlice from "./order/slice";
import partySlice from "./party/slice";
const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
  auth: authSlice,
  foodTypes: foodTypesSlice,
  foods: foodSlice,
  orders: ordersSlice,
  parties: partySlice,
});
