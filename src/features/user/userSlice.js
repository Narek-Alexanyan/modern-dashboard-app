import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../API/axiosInstance";

const initialState = {
  notifications: [],
  error: null
};

export const fetchNotifications = createAsyncThunk('user/fetchNotifications',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await axiosInstance.get("/440/notifications")

      dispatch(setNotifications(result.data.result))

      return result.data.result
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  })

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.notifications = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.pending, (state) => {
      state.error = null
    })
    builder.addCase(fetchNotifications.fulfilled, (_, action) => {
      console.log(action.payload);
    })
    builder.addCase(fetchNotifications.rejected, (state, action) => {
      state.error = action.payload
    })
  }
})

export const { setNotifications } = userSlice.actions;

export default userSlice.reducer;