import { createAction } from "@reduxjs/toolkit";
import { IOrdersFeed } from "../types";

export const connect = createAction<string, "ORDERS_PROFILE_CONNECT">(
  "ORDERS_PROFILE_CONNECT"
);
export const disconnect = createAction("ORDERS_PROFILE_DISCONNECT");

export const wsOpen = createAction("ORDERS_PROFILE_WS_OPEN");
export const wsClose = createAction("ORDERS_PROFILE_WS_CLOSE");
export const wsError = createAction<string, "ORDERS_PROFILE_WS_ERROR">(
  "ORDERS_PROFILE_WS_ERROR"
);
export const wsMessage = createAction<IOrdersFeed, "ORDERS_PROFILE_WS_MESSAGE">(
  "ORDERS_PROFILE_WS_MESSAGE"
);

export type TOrdersProfileActions =
  | ReturnType<typeof connect>
  | ReturnType<typeof disconnect>
  | ReturnType<typeof wsOpen>
  | ReturnType<typeof wsClose>
  | ReturnType<typeof wsError>
  | ReturnType<typeof wsMessage>;
