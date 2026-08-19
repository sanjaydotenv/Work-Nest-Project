import { axiosInstnace } from "../../../../app/config/axiosInstance";

export const employeeApi = async ({ page = 1, limit = 20 }) => {
  try {
    const response = await axiosInstnace.get(`/employee?page=${page}&limit=${limit}`);
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log(`Error is Employee API Calling`, error);
  }
};
