import axios, { InternalAxiosRequestConfig } from "axios";

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const auth = sessionStorage.getItem("auth");
  const token = JSON.parse(auth ?? "{}");
  if (auth) {
    config.headers["Authorization"] = `Bearer ${token.state.token}`;
  }
  return config;
};

export const authApi = axios.create({
  baseURL: "",
});

export const landLord = axios.create({
  baseURL: "",
});

landLord.interceptors.request.use(onRequest);
