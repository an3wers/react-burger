import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendOrder } from "../../api/order.api";
import { ICreateOrderRequestData } from "../../api/types";
import { IThunkConfig } from "../types";
import { IOrder } from "../../utils/types/order.type";

export const createOrder = createAsyncThunk<
  IOrder,
  ICreateOrderRequestData,
  IThunkConfig
>("order/createOrder", async (payload, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const response = await sendOrder(payload, token);
      return response.order;
    } else {
      throw new Error("Токен не найден");
    }
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
