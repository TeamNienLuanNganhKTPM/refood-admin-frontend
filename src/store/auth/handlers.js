/** @format */

const { loginAdminApi } = require("api/admin");
const { toast } = require("react-toastify");
const { call, put } = require("redux-saga/effects");
const { default: Swal } = require("sweetalert2");
const { authUpdate } = require("./slice");

function* handleAdminLogin({ payload }) {
  try {
    const response = yield call(loginAdminApi, payload);
    if (response.status === 200) {
      localStorage.setItem("accessToken", response.data.admin_access_token);
      localStorage.setItem("admin", JSON.stringify(response.data.admin_info));
      yield put(authUpdate(response.data));
      Swal.fire({
        position: "center",
        icon: "success",
        text: response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.message, {
      position: "top-right",
    });
  }
}
export { handleAdminLogin };
