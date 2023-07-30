import Axios, { AxiosResponse } from "axios";

export const createApi = () => {
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
    }
  );

  _customAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token.replace(/\"/gi, "")}`;
    }
    return config;
  });

  return _customAxios;
};

const customAxios = createApi();

export default customAxios;
