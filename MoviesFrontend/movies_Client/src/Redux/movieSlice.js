import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL_AVAILABLE = "http://localhost:4002/movies/available"; // URL para obtener las películas disponibles
const URL = "http://localhost:4002/movies"; // URL para obtener todas las peliculas
const URL_DETAIL = 'http://localhost:4002/movies/'; // URL para obtener los detalles de una película

export const fetchMovies = createAsyncThunk("movies/fetchmovies", async () => {
  const { data } = await axios(URL_AVAILABLE);
  return data;
});

export const createMovies = createAsyncThunk("movies/createmovies", async (newMovie) => {
  const token = localStorage.getItem("token");
  console.log(newMovie);
  const { data } = await axios.post(URL, newMovie, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  });
  return data;
});

export const fetchMovieDetails = createAsyncThunk("movies/fetchmoviedetails", async (movieId) => {
  const { data } = await axios(`${URL_DETAIL}${movieId}`);
  return data;
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    items: { content: [] },
    loading: false,
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
      })
      .addCase(createMovies.fulfilled, (state, action) => {
        state.items.content = [...state.items.content, action.payload]
      })
      .addCase(createMovies.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        (state.loading = false), (state.items = action.payload);
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});

export default movieSlice.reducer;
