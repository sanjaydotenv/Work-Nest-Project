import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstnace } from "../../../../app/config/axiosInstance";

export const employeeLogin = createAsyncThunk(
  "/auth/login",
  async (credential, thunkAPi) => {
    try {
      const res = await axiosInstnace.post("/auth/login", credential);
      console.log("Triggered");
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPi.rejectWithValue(error);
    }
  },
);

export const loggedInEmployee = createAsyncThunk(
  "/auth/me",
  async (credential, thunkAPi) => {
    try {
      console.log("chala hai")
      const res = await axiosInstnace.get("/auth/me", credential);
      console.log(res)
      return res
    } catch (error) {
      return thunkAPi.rejectWithValue(error);
    }
  },
);
