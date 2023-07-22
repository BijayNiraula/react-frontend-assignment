import { createSlice } from "@reduxjs/toolkit";
import { statuses } from "../../Enums/statuses";

const initialState = {
    cartsProducts: JSON.parse(localStorage.getItem("cartsProducts")) || [],
};

const cartsSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        add: (state, action) => {
            const updatedCartsProducts = [...state.cartsProducts, action.payload];
            localStorage.setItem("cartsProducts", JSON.stringify(updatedCartsProducts));
            state.cartsProducts = updatedCartsProducts;
        },
        remove: (state, action) => {
            const updatedCartsProducts = state.cartsProducts.filter(product => product.id != action.payload);
            localStorage.setItem("cartsProducts", JSON.stringify(updatedCartsProducts));
            state.cartsProducts = updatedCartsProducts;
        }
    }
})
export const { add, remove } = cartsSlice.actions;
export default cartsSlice.reducer;