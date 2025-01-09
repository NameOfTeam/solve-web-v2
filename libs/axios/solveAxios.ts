import axios from "axios";
import { API_URL } from "@/constants/api";
import { requestHandler } from "./requestHandler";
import { responseErrorHandler } from "./responseErrorHandler";

const solveAxios = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json, text/plain, */*, multipart/form-data",
  },
  withCredentials: true,
});

solveAxios.interceptors.request.use(requestHandler, (error) => {
  console.log(error);
  Promise.reject(error);
});

solveAxios.interceptors.response.use(
  (response) => response,
  responseErrorHandler
); 

export default solveAxios;
