import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quantity : 0
}


const cartSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        increment : (state,action)=> state.quantity+action.payload,
        decrement :(state,action)=> state.quantity+action.payload 
    }
})
export const {increment,decrement} = cartSlice.actions
export default cartSlice.reducer 