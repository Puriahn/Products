import { createSlice } from "@reduxjs/toolkit";
const initialState = { all: [] };

const Cart = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.all = [
        ...state.all,
        { id: action.payload.id, title: action.payload.title },
      ];
    },
  },
});

export const cartActions = Cart.actions;
export default Cart.reducer;
