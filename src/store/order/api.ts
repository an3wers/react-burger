import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOrder, sendOrder } from "../../api/order.api";
import { ICreateOrderRequestData } from "../../api/types";
import { IThunkConfig } from "../types";
import { IOrder, IOrderInfo } from "../../utils/types/order.type";

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

export const getOrderByNumber = createAsyncThunk<
  IOrderInfo,
  number,
  IThunkConfig
>("order/getOrderByNumber", async (payload, { rejectWithValue }) => {
  try {
    const response = await getOrder(payload);
    return response.orders[0];
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
