import { createSlice } from "@reduxjs/toolkit";
import { fetchIngredients } from "./thunks";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const ingridientsSlice = createSlice({
  name: "ingridients",
  initialState,
  reducers: {},
  extraReducers: (builder) => { 
    builder
    .addCase(fetchIngredients.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
    .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.map((item) => ({...item, qty: 0}));
      })
    .addCase(fetchIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export default ingridientsSlice.reducer;
