import { configureStore } from "@reduxjs/toolkit";
import  cartSliceReducer from "./features/cartSlice";

export const store = configureStore({
    reducer: cartSliceReducer
    
})