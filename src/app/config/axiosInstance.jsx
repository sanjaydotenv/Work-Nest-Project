import axios from "axios";

export const axiosInstnace = axios.create({
  baseURL: "https://team-sync-backend-n78w.onrender.com/api",
  withCredentials: true,
});

axiosInstnace.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRes = error.config;
    if (error.response.status === 401 && !originalRes._retry) {
      originalRes._retry = true;

      try {
        await axiosInstnace.get("/auth/get-accessToken");
        return axiosInstnace(originalRes)
      } catch (error) {
        window.location.href("/");
        return Promise.reject(error);
      }
    }
  },
);
