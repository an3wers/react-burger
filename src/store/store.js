import { configureStore } from "@reduxjs/toolkit";
import ingredientDetailsReducer from "./ingredient-details/slice";
import ingredientsReducer from "./ingredients/slice";
import ingredientsConstructorReducer from "./constructor/slice";
import orderReducer from "./order/slice";
import userReducer from './user/slice'

export const store = configureStore({
  reducer: {
    ingredientDetails: ingredientDetailsReducer,
    ingredients: ingredientsReducer,
    ingredientsConstructor: ingredientsConstructorReducer,
    order: orderReducer,
    user: userReducer
  },
});
