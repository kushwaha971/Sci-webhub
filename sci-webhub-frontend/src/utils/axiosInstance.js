// src/utils/axiosInstance.js
import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// axiosInstance.interceptors.request.use((config) => {
//   const token = Cookies.get("token");

//   if (token) {
//     console.log("toekn", token);
//     config.headers["x-access-token"] = token;
//   }
//   return config;
// });
export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common['x-access-token'] = token;
  } else {
    delete axiosInstance.defaults.headers.common['x-access-token'];
  }
};

export default axiosInstance;
