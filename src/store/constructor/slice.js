import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bun: null,
  items: [],
};

export const ingredientsConstructorSlice = createSlice({
  name: "ingredientsConstructor",
  initialState,
  reducers: {},
});

export default ingredientsConstructorSlice.reducer;
