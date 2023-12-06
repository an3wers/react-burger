import { configureStore } from "@reduxjs/toolkit";
import ingredientDetailsReducer from './ingredient-details/slice'
import ingredientsReducer from './ingredients/slice'

export const store = configureStore({
  reducer: {
    ingredientDetails: ingredientDetailsReducer,
    ingredients: ingredientsReducer
  }
})
