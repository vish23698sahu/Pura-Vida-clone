import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const response = await fetch('https://redux-async-cart-8eada-default-rtdb.firebaseio.com/cartItems.json');
    return response.json();
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        productsList: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productsList = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.log("Error : ", action.payload);
            state.isError = true;
        })
    }
})

export default productSlice;