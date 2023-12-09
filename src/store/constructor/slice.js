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
      state.items.push(action.payload);
    },
    removeBun: (state) => {
      state.bun = null;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.uuid !== action.payload);
    },
    updateSortItems: (state, action) => {
      const { dragId, hoverId } = action.payload;

      const sortedItems = [...state.items];
      sortedItems.splice(dragId, 1);
      sortedItems.splice(hoverId, 0, state.items[dragId]);
      state.items = sortedItems;
    },
  },
});

export const { setBun, setItems, removeBun, removeItem, updateSortItems } =
  ingredientsConstructorSlice.actions;
export default ingredientsConstructorSlice.reducer;
