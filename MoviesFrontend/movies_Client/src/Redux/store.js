import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";
import searchReducer from "./searchSlice.js";
import orderReducer from "./orderSlice";

export const store = configureStore({
  reducer: { 
    movies: movieReducer,
    users: userReducer,
    search: searchReducer, 
    orders: orderReducer,
  },
});
