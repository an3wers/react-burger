import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  ingridient: null
 }

export const ingredientDetailsSlice = createSlice({ 
  name: "singleIngredient",
  initialState,
  reducers: {
    setIngredient: (state, action) => {
      state.ingridient = action.payload
    },
    clearIngridient: (state) => {
      state.ingridient = null
    }
  }
 })

 export const { setIngredient, clearIngridient } = ingredientDetailsSlice.actions;
 export default ingredientDetailsSlice.reducer;
