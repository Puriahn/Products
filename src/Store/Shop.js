import { createSlice } from "@reduxjs/toolkit";
const initialState = {x:'hide'};

const Shop = createSlice({
  name: "shop",
  initialState: initialState,
  reducers: {
    showCart(state){
        
        state.x='showCart'
    },
    hideCart(state){
        state.x='hideCart'
    },
    showCheckout(state){
        state.x='showCheckout'
    },
    hideCheckout(state){
        state.x='hideCheckout'
    }
  },
});

export const shopActions = Shop.actions;
export default Shop.reducer;
