import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebar: true
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsSidebar: (state, action) => {
      state.isSidebar = action.payload ? action.payload : !state.isSidebar
    }
  },
})

export const { setIsSidebar } = userSlice.actions;

export default userSlice.reducer;