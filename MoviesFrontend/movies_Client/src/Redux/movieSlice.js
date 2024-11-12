import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:4002/movies/available";

export const fetchMovies = createAsyncThunk("movies/fetchmovies", async () => {
  const { data } = await axios(URL);
  return data;
});

export const createMovies = createAsyncThunk("movies/createmovies", async () => {
  const { data } = await axios.post(URL);
  return data;
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    items: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        (state.loading = false), (state.items = action.payload);
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});

export default movieSlice.reducer;
