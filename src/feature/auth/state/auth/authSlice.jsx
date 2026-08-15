import { createSlice } from "@reduxjs/toolkit";
import { employeeLogin, loggedInEmployee } from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    employee: null,
    isLoading: false,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isLoading = false;
    },

    removeEmployee: (state) => {
      state.employee = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(employeeLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(employeeLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employee = action.payload;
      })
      .addCase(employeeLogin.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(loggedInEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loggedInEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employee = action.payload;
      })
      .addCase(loggedInEmployee.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addEmployee, removeEmployee } = authSlice.actions;
export default authSlice.reducer;
