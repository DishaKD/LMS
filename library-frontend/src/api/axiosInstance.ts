// services/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5295/api", // replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
