import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  paymentMethods: [],
  totalPayment: 0,
  selectedMethod :""
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenModal: (state) => {
      state.openModal = !state.openModal;
    },
    setSelectedMethod :(state, action)=>{
      state.selectedMethod = action.payload;
    },
    setPaymentMethods: (state, action) => {
      state.paymentMethods = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
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
  setSelectedMethod
} = cartSlice.actions;

export default cartSlice.reducer;
