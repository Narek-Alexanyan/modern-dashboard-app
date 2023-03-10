import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../API/axiosInstance";

const initialState = {
  agentsList: [],
  status: "",
  error: null
};

export const fetchAgents = createAsyncThunk(
  "agent/fetchAgents",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await axiosInstance.get("/440/agents");

      dispatch(setAgentsList(result.data.result))

      return result.data.result
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    setAgentsList: (state, action) => {
      state.agentsList = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAgents.pending, (state) => {
      state.status = "pending"
      state.error = null
    })
    builder.addCase(fetchAgents.fulfilled, (state) => {
      state.status = "resolve"
    })
    builder.addCase(fetchAgents.rejected, (state, action) => {
      state.status = "rejected"
      state.error = action.payload
    })
  }
})

export const { setAgentsList } = agentSlice.actions;

export default agentSlice.reducer;