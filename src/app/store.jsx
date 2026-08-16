import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/state/auth/authSlice";
import themeReducer from "../shared/state/themeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
});
