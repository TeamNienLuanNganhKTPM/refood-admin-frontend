/** @format */

const { default: axios } = require("axios");

const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
instance.interceptors.request.use((req) => {
  const token = window.localStorage.getItem("accessToken");
  if (token) {
    req.headers.Authorization = token;
  }
  return req;
});

// Add a response interceptor
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const status = error.response ? error.response.status : 500;
    if (status && status === 500) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export default instance;
