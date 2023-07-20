import { createSlice } from "@reduxjs/toolkit";
import { statuses } from "../../Enums/statuses";

const initialState = {
    cartsProducts: [],
    status: statuses.LOADING
}

const cartsSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        add: (state, actions) => {

        },
        remove: (state, actions) => {

        },
        removerAll: (state, actions) => {

        }
    }
})
export const { add, remover, removerAll } = cartsSlice.actions;
export default cartsSlice.reducer