/** @format */

import { takeLatest } from "redux-saga/effects";
import {
  handleCancelParty,
  handleGetAllParties,
  handleGetPartyDetail,
  handleUpdateParty,
} from "./handlers";
import {
  cancelParty,
  getAllPartys,
  getPartyDetail,
  updateParty,
} from "./slice";

export default function* partiesWatcher() {
  yield takeLatest(getAllPartys.type, handleGetAllParties);
  yield takeLatest(getPartyDetail.type, handleGetPartyDetail);
  yield takeLatest(updateParty.type, handleUpdateParty);
  yield takeLatest(cancelParty.type, handleCancelParty);
}
