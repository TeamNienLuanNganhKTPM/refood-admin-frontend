/** @format */

import { createSlice } from "@reduxjs/toolkit";

const partySlice = createSlice({
  name: "parties",
  initialState: {},
  reducers: {
    getAllPartys: (state, { payload }) => ({
      ...state,
      // ...payload,
    }),
    updateAllPartys: (state, { payload }) => ({
      ...state,
      pageNumberParty: payload.pageNum,
      parties: payload.parties,
    }),
    getPartyDetail: (state, { payload }) => ({
      ...state,
      // ...payload,
    }),
    updatePartyDetail: (state, { payload }) => ({
      ...state,
      partyDetail: payload.party_detail,
    }),
    updateParty: (state, { payload }) => ({
      ...state,
      // ...payload,
    }),
    cancelParty: (state, { payload }) => ({
      ...state,
    }),
  },
});

export const {
  getAllPartys,
  updateAllPartys,
  getPartyDetail,
  updatePartyDetail,
  updateParty,
  cancelParty,
} = partySlice.actions;
export default partySlice.reducer;
