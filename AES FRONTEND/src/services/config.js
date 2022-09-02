import axios from "axios";
import { toast } from "react-toastify";

const rutaApi = import.meta.env.VITE_API_URL
const timeout= import.meta.env.VITE_API_TIMEOUT
export const apiUrl = rutaApi;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error?.response?.status >= 400 && error?.response?.status < 500;
  if (!expectedError) {
    toast.error("Error de conexión con el servidor", {
      toastId: "ErrorServer",
    });
  }
  return Promise.reject(error);
});

axios.defaults.baseURL = rutaApi
axios.defaults.timeout = timeout;

export default {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};
