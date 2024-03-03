import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createOrder, getOrderByNumber } from "./api";
import { IOrder, IOrderInfo } from "../../utils/types/order.type";

interface IState {
  orderDetails: IOrder | null;
  currentOrder: IOrderInfo | null
  isLoading: boolean;
  error: string | null;
}

const initialState: IState = {
  orderDetails: null,
  currentOrder: null,
  isLoading: false,
  error: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrder: (state) => {
      state.orderDetails = null;
      state.isLoading = false;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.orderDetails = null;
        state.isLoading = false;
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(getOrderByNumber.fulfilled, (state, action) => {
        state.currentOrder = action.payload
      })
  },
});

export const { resetOrder, setError } = orderSlice.actions;
export default orderSlice.reducer;
