import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice"
import userSlice from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    user: userSlice,
  },
});
