import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendOrder } from "../../api/order.api";

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (payload, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('accessToken')
      const response = await sendOrder(payload, token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
