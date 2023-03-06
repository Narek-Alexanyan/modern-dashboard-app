import axios from "axios";
import { store } from "../app/store"
import { logout } from "../features/auth/authSlice";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080"
})

// Add a request interceptor
axiosInstance.interceptors.request.use((config) => {
  const user = localStorage.getItem("user");
  let token = null
  if (user) token = JSON.parse(user).token

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  }

  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  const { dispatch } = store

  if (error.response.status === 401 && error.response.data === "jwt expired") {
    dispatch(logout())
  }
  return Promise.reject(error);
});