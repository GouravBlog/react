import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

export const STATUSES = Object.freeze({
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error"
})

const productSlice = createSlice({
    name: "Products",
    initialState: {
        data: [],
        status: STATUSES.SUCCESS
    },
    reducers: {
        setProducts: (state, action) => {
            state.data = action.payload
        },
        setStatus: (state, action) => {
            state.status = action.payload
        }
    }
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;



export function fetchProducts() {
    return async function fetchProductsThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));

            let data = await fetch("https://fakestoreapi.com/products");
            data = await data.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.SUCCESS));
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}