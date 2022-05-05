import axios from "axios";

const baseAxiosMethod = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

baseAxiosMethod.interceptors.request.use(
  (config) => {
    // Add authorization key to config object if it exist
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export const getRequest = async ({ url}) => {
  const response = await baseAxiosMethod(url);
  return response.data;
}
export const postRequest = async ({ url, data}) => {
  const response = await baseAxiosMethod.post(url, data);
  return response.data;
}

export const putRequest = async ({ url, data}) => {
  const response = await baseAxiosMethod.put(url, data);
  return response.data;
}

export const deleteRequest = async ({ url }) => {
  const response = await baseAxiosMethod.get(url);
  return response.data;
};


export default baseAxiosMethod;
