import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../API/axiosInstance";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  token: JSON.parse(localStorage.getItem("user"))?.token,
  status: "",
  error: null,
};

export const signIn = createAsyncThunk(
  'counter/signIn',
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const result = await axiosInstance.post("/login", formData)

      dispatch(setUser(result.data))
      return result.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.accessToken
    },
    logout: (state) => {
      state.user = null
      state.token = null
      localStorage.removeItem("user")
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.error = null
      state.status = "loading";
    })
    builder.addCase(signIn.fulfilled, (state) => {
      state.status = "resolved"
    })
    builder.addCase(signIn.rejected, (state, action) => {
      state.status = "rejected"
      state.error = action.payload
    })
  }
})

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;