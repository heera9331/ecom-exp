import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/components/Types"
import axios from "axios";

const initialState: { products: Product[] } = {
    products: []
}

const fetchProduct = async (query: string) => {
    let res = await axios.get(`/api/products/search?query=${query}`);

    if (res.statusText === "OK") {
        let products = await res.data;
        return products;
    }
    return [];
}

const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        getProduct: async (state, action) => {
            let query:string = await action.payload;
            let products = await fetchProduct(query);
            return [...state.products, products];
        }
    }
})

export const { getProduct } = productSlice.actions
export default productSlice.reducer 