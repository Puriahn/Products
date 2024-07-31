import { configureStore } from "@reduxjs/toolkit";
import cartShop from './CartStore'
import shopCart from './Shop'

const store = configureStore({
  reducer: { products: cartShop,shop: shopCart},
});


export default store;
