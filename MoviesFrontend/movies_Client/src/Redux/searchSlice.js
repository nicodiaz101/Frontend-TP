import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Acción asíncrona para buscar películas
export const searchMovies = createAsyncThunk(
  "search/searchMovies",
  async (query) => {
    const { data } = await axios(`http://localhost:4002/movies/title?title=${query}`);
    return data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    movie: null,
    loading: false,
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        (state.loading = false), (state.movie = action.payload);
      })
      .addCase(searchMovies.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;