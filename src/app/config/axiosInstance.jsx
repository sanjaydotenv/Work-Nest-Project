import axios from "axios";

export const axiosInstnace = axios.create({
  baseURL: "api.team-sync.space.api",
  withCredentials: true,
});
