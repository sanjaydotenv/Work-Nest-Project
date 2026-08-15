import axios from "axios";

export const axiosInstnace = axios.create({
  baseURL: "https://team-sync-backend-n78w.onrender.com/api",
  withCredentials: true,
});
