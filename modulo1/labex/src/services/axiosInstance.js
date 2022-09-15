import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

const token = localStorage.getItem("token");
export const axiosInstance = axios.create({
  baseURL: `${baseUrl}`,
  headers: {
    auth: token,
  },
});
