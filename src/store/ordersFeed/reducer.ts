import { createReducer } from "@reduxjs/toolkit";
import { wsClose, wsError, wsMessage, wsOpen } from "./actions";
import { IOrderFeed } from "../types";

export interface IOrdersFeedStore {
  orders: IOrderFeed[];
  total: number;
  totalToday: number;
  connectionError: string;
  isLoaded: boolean;
}

const initialState: IOrdersFeedStore = {
  orders: [],
  total: 0,
  totalToday: 0,
  connectionError: "",
  isLoaded: false,
};

export const ordersFeedReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsMessage, (state, action) => {
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
      state.connectionError = ''
      state.isLoaded = true
    })
    .addCase(wsError, (state, action) => {
      console.log("ORDERS FEED WS ERROR: ", action.payload);
      state.connectionError = action.payload;
    })
    .addCase(wsOpen, (state) => {
      console.log("ORDERS FEED WS OPEN");
    })
    .addCase(wsClose, (state) => {
      console.log("ORDERS FEED WS CLOSE");
    });
});
