import { axiosInstnace } from "../../../../app/config/axiosInstance";

export const employeeApi = async () => {
  try {
    const response = await axiosInstnace.get("/employee");
    console.log(response)
    return response.data.data;
  } catch (error) {
    console.log(`Error is Employee API Calling`, error);
  }
};
