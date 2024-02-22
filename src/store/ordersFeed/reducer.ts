import { createReducer } from "@reduxjs/toolkit";
import { wsClose, wsError, wsMessage, wsOpen } from "./actions";
import { IOrderFeed } from "../types";

export interface IOrdersFeedStore {
  orders: IOrderFeed[];
  total: number;
  totalToday: number;
  connectionError: string;
}

const initialState: IOrdersFeedStore = {
  orders: [],
  total: 0,
  totalToday: 0,
  connectionError: "",
};

export const ordersFeedReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsMessage, (state, action) => {
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    })
    .addCase(wsError, (state, action) => {
      console.log("ORDERS FEED WS ERROR: ", action.payload);
      state.connectionError = action.payload;
    })
    .addCase(wsOpen, () => {
      console.log("ORDERS FEED WS OPEN");
    })
    .addCase(wsClose, () => {
      console.log("ORDERS FEED WS CLOSE");
    });
});
