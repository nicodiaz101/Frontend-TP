import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL_REGISTER = "http://localhost:4002/auth/register";
const URL_LOGIN = "http://localhost:4002/auth/login";

export const registerUsers = createAsyncThunk("users/registerusers", async (newUser) => {
    const { data } = await axios.post(URL_REGISTER, newUser);
    return data;
});

export const loginUsers = createAsyncThunk("users/loginusers", async (loggedUser) => {
    const { data } = await axios.post(URL_LOGIN, loggedUser);
    return data;
});

const userSlice = createSlice({
    name: "users",
    initialState: {
        items: { content: [] },
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUsers.fulfilled, (state, action) => {
                state.items.content = [...state.items.content, action.payload]
            })
            .addCase(registerUsers.rejected, (state, action) => {
                (state.loading = false), (state.error = action.error.message);
            })
            .addCase(loginUsers.fulfilled, (state, action) => {
                state.items.content = [...state.items.content, action.payload]
            })
            .addCase(loginUsers.rejected, (state, action) => {
                (state.loading = false), (state.error = action.error.message);
            });
    },
});

export default userSlice.reducer;