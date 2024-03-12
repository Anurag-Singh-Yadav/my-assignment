"use client";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: true,
  isLight: true,
};
export const GlobalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    setLoading: (state, value) => {
      state.isLoading = value.payload;
      return state;
    },
    setisLight:()=>{
        state.isLight = !state.isLight;
        return state;
    },
  },
});
export const { setLoading, setisLight } = GlobalStateSlice.actions;
export default GlobalStateSlice.reducer;
