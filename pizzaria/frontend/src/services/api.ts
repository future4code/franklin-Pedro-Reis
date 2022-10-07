import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3003",
});

instance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
