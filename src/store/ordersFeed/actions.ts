import { createAction } from "@reduxjs/toolkit";
import { IOrdersFeed } from "../types";

export const connect = createAction<string, "ORDERS_FEED_CONNECT">(
  "ORDERS_FEED_CONNECT"
);
export const disconnect = createAction("ORDERS_FEED_DISCONNECT");

export const wsOpen = createAction("ORDERS_FEED_WS_OPEN");
export const wsClose = createAction("ORDERS_FEED_WS_CLOSE");
export const wsError = createAction<string, "ORDERS_FEED_WS_ERROR">(
  "ORDERS_FEED_WS_ERROR"
);
export const wsMessage = createAction<IOrdersFeed, "ORDERS_FEED_WS_MESSAGE">(
  "ORDERS_FEED_WS_MESSAGE"
);

export type TOrdersFeedActions =
  | ReturnType<typeof connect>
  | ReturnType<typeof disconnect>
  | ReturnType<typeof wsOpen>
  | ReturnType<typeof wsClose>
  | ReturnType<typeof wsError>
  | ReturnType<typeof wsMessage>;
