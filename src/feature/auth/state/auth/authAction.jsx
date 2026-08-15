import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstnace } from "../../../../app/config/axiosInstance";

const employeeLogin = createAsyncThunk(
  "/auth/login",
 async (credential, thunkAPi) => {
    try {
        const res = await axiosInstnace.post(credential)
        console.log(res)
        return res.data
    } catch (error) {
      return thunkAPi.rejectWithValue(error);
    }
  },
);
