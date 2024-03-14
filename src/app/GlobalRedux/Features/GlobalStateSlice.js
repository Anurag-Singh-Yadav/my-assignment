import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  paymentMethods: [],
  openModal: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenModal: (state) => {
      state.openModal = !state.openModal;
    },
    setPaymentMethods: (state, action) => {
      state.paymentMethods = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    addItemToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item, index) => index !== action.payload);
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  setOpenModal,
  setPaymentMethods,
  setCart,
  addItemToCart,
  removeItemFromCart,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
