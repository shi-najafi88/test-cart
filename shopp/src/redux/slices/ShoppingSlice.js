import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    productsInfoArray:[],
    cartProductArray:[],
}

const ShoppingSlice= createSlice({
    name:'shopping/redux',
    initialState,
    reducers:{
        PRODUCT_INFO:(state,action) => {
            state.productsInfoArray = action.payload
        },

        CARTPRODUCT:(state,action) => {
            const filtredList = state.cartProductArray.filter(item => item.id !== action.payload.id)
            state.cartProductArray = [...filtredList,action.payload]
        }  
    }
})

export const { PRODUCT_INFO, CARTPRODUCT } = ShoppingSlice.actions

export default ShoppingSlice.reducer