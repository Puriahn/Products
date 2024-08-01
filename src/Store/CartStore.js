import { createSlice } from "@reduxjs/toolkit";
const initialState = { all: [] };

const Cart = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    add(state, action) {
      const a = state.all.findIndex((item) => item.id === action.payload.id);
      if (a > -1) {
        state.all[a].quantity++;
      } else {
        state.all = [
          ...state.all,
          { id: action.payload.id, title: action.payload.title, quantity: 1 },
        ];
      }
    },
  },
});

export const cartActions = Cart.actions;
export default Cart.reducer;
