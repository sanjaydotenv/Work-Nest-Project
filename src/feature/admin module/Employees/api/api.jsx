import { axiosInstnace } from "../../../../app/config/axiosInstance";

export const employeeApi = async ({ page = 1, limit = 20, filter }) => {
  const { search, role, departments, status } = filter;

  console.log(departments , status , role , search)
  try {
    const response = await axiosInstnace.get(
      `/employee?page=${page}&limit=${limit}&role=${role}&department=${departments}&search=${search}&status=${status}`,
    );
    console.log(response)
    return response.data.data;
  } catch (error) {
    console.log(`Error is Employee API Calling`, error);
  }
};
