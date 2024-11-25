import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:4002/orders";

export const createOrders = createAsyncThunk("orders/createorders", async (newOrder) => {
    const token = localStorage.getItem("token");
    console.log(newOrder);
    const { data } = await axios.post(URL, newOrder, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    });
    return data;
});

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        items: { content: [] },
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createOrders.fulfilled, (state, action) => {
                state.items.content = [...state.items.content, action.payload]
            })
            .addCase(createOrders.rejected, (state, action) => {
                (state.loading = false), (state.error = action.error.message);
            });
    },
});

export default orderSlice.reducer;