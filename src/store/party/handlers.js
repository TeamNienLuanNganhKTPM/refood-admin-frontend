/** @format */

import {} from "api/order";
import {
  cancelPartyAdminApi,
  getAllPartysApi,
  getPartyDetailApi,
  updatePartyAdminApi,
} from "api/party";
import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import Swal from "sweetalert2";
import { getPartyDetail, updateAllPartys, updatePartyDetail } from "./slice";

function* handleGetAllParties({ payload }) {
  try {
    const response = yield call(getAllPartysApi, payload);
    if (response.status === 200) {
      yield put(updateAllPartys(response.data));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleGetPartyDetail({ payload }) {
  try {
    const response = yield call(getPartyDetailApi, payload);
    if (response.status === 200) {
      yield put(updatePartyDetail(response.data));
    }
  } catch (error) {
    const { message } = error.response.data;
    console.log(message);
  }
}

function* handleUpdateParty({ payload }) {
  try {
    const response = yield call(updatePartyAdminApi, payload);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message, {
      position: "top-right",
    });
  }
}

function* handleCancelParty({ payload }) {
  try {
    const response = yield call(cancelPartyAdminApi, payload);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        text: response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message, {
      position: "top-right",
    });
  }
}

export {
  handleGetAllParties,
  handleGetPartyDetail,
  handleUpdateParty,
  handleCancelParty,
};
