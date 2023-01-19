import Axios, { AxiosInstance } from "axios";

export const httpApi: AxiosInstance = Axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

httpApi.interceptors.request.use(
  (requestConfig) => {
    return requestConfig;
  },
  (error) => Promise.reject(error)
);

httpApi.interceptors.response.use((response) => {
  if (response.status === 404) {
    return Promise.reject(response);
  }

  return response;
});
