import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Acción asíncrona para buscar películas
export const fetchMovies = createAsyncThunk(
  "search/fetchMovies",
  async (query) => {
    const response = await fetch(`http://localhost:4002/movies/title?query=${query}`);
    if (!response.ok) {
      throw new Error("Error al solicitar la pelicula");
    }
    const data = await response.json();
    return data.results;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    movies: [],
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
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;

