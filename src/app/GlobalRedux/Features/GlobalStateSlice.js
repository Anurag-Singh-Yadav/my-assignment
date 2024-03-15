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
  },
});

export const {
  setPaymentMethods,
  setCart,
  setTotalPayment,
  setSelectedMethod
} = cartSlice.actions;

export default cartSlice.reducer;
