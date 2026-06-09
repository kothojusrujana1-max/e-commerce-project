import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
  },

  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
      state.totalPrice += action.payload.price;
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter(
        (_, index) => index !== action.payload.index
      );

      state.totalPrice -= action.payload.price;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;