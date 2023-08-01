import Axios, { AxiosResponse } from "axios";

export const createApi = (headers: any) => {
  const _customAxios = Axios.create({
    baseURL: "http://43.201.37.164:3000",
    validateStatus: (status) => status >= 200 && status < 400,
  });

  _customAxios.interceptors.response.use(
    (response) => {
      return Promise.resolve(response.data) as unknown as AxiosResponse;
    },

    async (error) => {
      return Promise.reject(error);
    },
  );

  _customAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token.replace(/\"/gi, "")}`;
    }
    if (headers) {
      config.headers = { ...config.headers, ...headers };
    }
    return config;
  });

  return _customAxios;
};

const customHeaders = {
  "Content-Type": "multipart/form-data",
};

const customAxios = createApi(customHeaders);

export default customAxios;
