import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";
import orderReducer from "./orderSlice"

export const store = configureStore({
  reducer: { 
    movies: movieReducer,
    users: userReducer,
    orders: orderReducer,
  },
});
