import { createReducer } from "@reduxjs/toolkit";
import { wsClose, wsError, wsMessage, wsOpen } from "./actions";
import { IOrderFeed } from "../types";

export interface IOrdersProfileStore {
  orders: IOrderFeed[];
  connectionError: string;
  isLoaded: boolean;
}

const initialState: IOrdersProfileStore = {
  orders: [],
  connectionError: "",
  isLoaded: false,
};

export const ordersProfileReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsMessage, (state, action) => {
      state.orders = action.payload.orders;
      state.connectionError = "";
      state.isLoaded = true;
    })
    .addCase(wsError, (state, action) => {
      console.log("ORDERS PROFILE WS ERROR: ", action.payload);
      state.connectionError = action.payload;
    })
    .addCase(wsOpen, (state) => {
      console.log("ORDERS PROFILE WS OPEN");
    })
    .addCase(wsClose, (state) => {
      console.log("ORDERS PROFILE WS CLOSE");
    });
});
