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
import { ordersFeedReducer } from "./ordersFeed/reducer";

const reducers = combineReducers({
  ingredients: ingredientsReducer,
  ingredientsConstructor: ingredientsConstructorReducer,
  order: orderReducer,
  user: userReducer,
  ordersFeed: ordersFeedReducer,
});

const feedMiddleware = socketMiddleware({
  onClose: OrdersFeedWsClose,
  onError: OrdersFeedWsError,
  onMessage: OrdersFeedWsMessage,
  onOpen: OrdersFeedWsOpen,
  wsConnect: OrdersFeedWsConnect,
  wsDisconnect: OrdersFeedWsDisconnect,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(feedMiddleware);
  },
});

// export type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
