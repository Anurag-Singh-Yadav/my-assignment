import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  paymentMethods: [],
  totalPayment: 0,
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
    setTotalPayment: (state, action) => {
      state.totalPayment = action.payload;
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
  setTotalPayment,
} = cartSlice.actions;

export default cartSlice.reducer;
