import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../API/axiosInstance";

const initialState = {
  salesList: [],
  status: "",
  error: null
};

export const fetchSales = createAsyncThunk(
  "sales/fetchSales",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await axiosInstance.get("/440/sales");

      dispatch(setSalesList(result.data.result))

      return result.data.result
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    setSalesList: (state, action) => {
      state.salesList = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSales.pending, (state) => {
      state.status = "pending"
      state.error = null
    })
    builder.addCase(fetchSales.fulfilled, (state) => {
      state.status = "resolve"
    })
    builder.addCase(fetchSales.rejected, (state, action) => {
      state.status = "rejected"
      state.error = action.payload
    })
  }
})

export const { setSalesList } = salesSlice.actions;

export default salesSlice.reducer;