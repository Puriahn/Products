import { createSlice } from "@reduxjs/toolkit";
const initialState = null;

const Shop = createSlice({
  name: "shop",
  initialState: initialState,
  reducers: {
    showCart(state){
        state='showCart'
    },
    hideCart(state){
        state='hideCart'
    },
    showCheckout(state){
        state='showCheckout'
    },
    hideCheckout(state){
        state='hideCheckout'
    }
  },
});

export const shopActions = Shop.actions;
export default Shop.reducer;
