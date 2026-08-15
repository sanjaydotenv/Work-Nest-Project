import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/state/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
