import { axiosInstnace } from "../../../../app/config/axiosInstance";

export const createNewDepartmentAPI = async (data) => {
    console.log(data)
    const response = await axiosInstnace.post("/departments/create" , {
        data
    })

    return response
};


export const getAllDepartmentsAPI = async () => {
    const response = await axiosInstnace.get("/departments")

    return response
}