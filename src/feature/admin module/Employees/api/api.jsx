import { axiosInstnace } from "../../../../app/config/axiosInstance";

export const employeeApi = async ({ page = 1, limit = 20, filter }) => {
  const { search, role, departments, status } = filter;

  try {
    const response = await axiosInstnace.get(
      `/employee?page=${page}&limit=${limit}&role=${role}&department=${departments}&search=${search}&status=${status}`,
    );
    return response.data.data;
  } catch (error) {
    console.log(`Error is Employee API Calling`, error);
  }
};

export const AddEmployee = async (data) => {
  console.log(data);
  try {
    const res = await axiosInstnace.post("/employee/create", data);
    console.log("Response ", res);
    return res;
  } catch (error) {
    console.log("Status:", error.response?.status);
    console.log("Backend Error:", error.response?.data);
    console.log("Full Error:", error);
  }
};
