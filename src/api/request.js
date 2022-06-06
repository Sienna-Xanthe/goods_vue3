import axios from "axios";
const BASE_URL = "http://152.136.185.210:5000";

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  let token = window.atob(sessionStorage.getItem("token"));
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use((response) => {
  return response.data;
});

export default instance;
