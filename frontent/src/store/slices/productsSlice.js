import { createSlice } from "@reduxjs/toolkit";
import { statuses } from "../../Enums/statuses";

const initialState = {
    products: [],
    status: statuses.LOADING
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, actions) => {

        },

    }
})
export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;