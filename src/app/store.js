import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice"
import userSlice from "../features/user/userSlice";
import navbarSlice from "../features/navbar/navbarSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    user: userSlice,
    navbar: navbarSlice,
  },
});
