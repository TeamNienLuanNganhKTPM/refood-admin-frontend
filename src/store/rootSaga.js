/** @format */

import { all, fork } from "redux-saga/effects";
import authWatcher from "./auth/saga";
import foodsWatcher from "./foods/saga";
import foodTypesWatcher from "./foodtypes/saga";
import ordersWatcher from "./order/saga";
import partiesWatcher from "./party/saga";
import usersWatcher from "./users/saga";

export default function* rootSaga() {
  yield all([
    fork(authWatcher),
    fork(foodTypesWatcher),
    fork(foodsWatcher),
    fork(ordersWatcher),
    fork(partiesWatcher),
    fork(usersWatcher),
  ]);
}
