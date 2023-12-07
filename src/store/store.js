import { configureStore } from "@reduxjs/toolkit";
import ingredientDetailsReducer from "./ingredient-details/slice";
import ingredientsReducer from "./ingredients/slice";
import ingredientsConstructorReducer from "./constructor/slice";

export const store = configureStore({
  reducer: {
    ingredientDetails: ingredientDetailsReducer,
    ingredients: ingredientsReducer,
    ingredientsConstructor: ingredientsConstructorReducer,
  },
});
