import { axiosInstnace } from "../../../app/config/axiosInstance"

export const logoutAPI = async () => {
    await axiosInstnace.post("/auth/logout")
}