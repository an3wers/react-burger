import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredients/slice";
import ingredientsConstructorReducer from "./constructor/slice";
import orderReducer from "./order/slice";
import userReducer from "./user/slice";
import { socketMiddleware } from "./middleware/socket-middleware";
import {
  connect as OrdersFeedWsConnect,
  disconnect as OrdersFeedWsDisconnect,
  wsClose as OrdersFeedWsClose,
  wsError as OrdersFeedWsError,
  wsMessage as OrdersFeedWsMessage,
  wsOpen as OrdersFeedWsOpen,
} from "./ordersFeed/actions";
import {
  connect as OrdersProfileWsConnect,
  disconnect as OrdersProfileWsDisconnect,
  wsClose as OrdersProfileWsClose,
  wsError as OrdersProfileWsError,
  wsMessage as OrdersProfileWsMessage,
  wsOpen as OrdersProfileWsOpen,
} from "./ordersProfile/actions";
import { ordersFeedReducer } from "./ordersFeed/reducer";
import { ordersProfileReducer } from "./ordersProfile/reducer";

const reducers = combineReducers({
  ingredients: ingredientsReducer,
  ingredientsConstructor: ingredientsConstructorReducer,
  order: orderReducer,
  user: userReducer,
  ordersFeed: ordersFeedReducer,
  ordersProfile: ordersProfileReducer,
});

const feedMiddleware = socketMiddleware({
  onClose: OrdersFeedWsClose,
  onError: OrdersFeedWsError,
  onMessage: OrdersFeedWsMessage,
  onOpen: OrdersFeedWsOpen,
  wsConnect: OrdersFeedWsConnect,
  wsDisconnect: OrdersFeedWsDisconnect,
});

const profileMiddleware = socketMiddleware(
  {
    onClose: OrdersProfileWsClose,
    onError: OrdersProfileWsError,
    onMessage: OrdersProfileWsMessage,
    onOpen: OrdersProfileWsOpen,
    wsConnect: OrdersProfileWsConnect,
    wsDisconnect: OrdersProfileWsDisconnect,
  },
  true
);

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([feedMiddleware, profileMiddleware]);
  },
});

// export type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
