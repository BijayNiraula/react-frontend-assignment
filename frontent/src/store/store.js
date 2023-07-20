import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "./slices/cartsSlice";
import productsReducer from "./slices/productsSlice"
const store = configureStore({
    reducer: {
        carts: cartsReducer,
        products: productsReducer
    }
})

export default store;