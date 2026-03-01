import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching data
export const fetchLogs = createAsyncThunk(
  "logs/fetchLogs",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // Convert to EcoTrack format (example)
    return data.slice(0, 5).map((item) => ({
      id: item.id,
      activity: item.title,
      carbonFootprint: Math.floor(Math.random() * 100)
    }));
  }
);

const logsSlice = createSlice({
  name: "logs",
  initialState: {
    logs: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.logs = action.payload;
      })
      .addCase(fetchLogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export default logsSlice.reducer;