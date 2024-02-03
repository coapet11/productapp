import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState: {
        allProducts: [],
        isLoading: false,
    },
    reducers: {
        productHandler: (state, action) => {
            state.allProducts = action.payload;
            state.isLoading = true;
        }
    }
})

export const { productHandler } = productSlice.actions;
export default productSlice.reducer;