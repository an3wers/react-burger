import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bun: null,
  items: [],
};

export const ingredientsConstructorSlice = createSlice({
  name: "ingredientsConstructor",
  initialState,
  reducers: {
    setBun: (state, action) => {
      state.bun = action.payload;
    },
    setItems: (state, action) => {
      const length = state.items.length;
      state.items.push({ ...action.payload, order: length - 1 });
    },
    removeBun: (state) => {
      state.bun = null;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.uuid !== action.payload
      );
    },
  },
});

export const { setBun, setItems, removeBun, removeItem } = ingredientsConstructorSlice.actions;
export default ingredientsConstructorSlice.reducer;
