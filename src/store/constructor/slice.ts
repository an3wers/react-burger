import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IItemConstructor {
  id: string;
  type: string;
  name: string;
  price: number;
  image: string;
  uuid: string;
}

interface IState {
  bun: IItemConstructor | null;
  items: IItemConstructor[];
}

const initialState: IState = {
  bun: null,
  items: [],
};

export const ingredientsConstructorSlice = createSlice({
  name: "ingredientsConstructor",
  initialState,
  reducers: {
    setBun: (state, action: PayloadAction<IItemConstructor>) => {
      state.bun = action.payload;
    },
    setItems: (state, action: PayloadAction<IItemConstructor>) => {
      state.items.push(action.payload);
    },
    removeBun: (state) => {
      state.bun = null;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.uuid !== action.payload);
    },
    updateSortItems: (
      state,
      action: PayloadAction<{ dragId: number; hoverId: number }>
    ) => {
      const { dragId, hoverId } = action.payload;

      const sortedItems = [...state.items];
      sortedItems.splice(dragId, 1);
      sortedItems.splice(hoverId, 0, state.items[dragId]);
      state.items = sortedItems;
    },
    resetConstructor: (state) => {
      state.bun = null;
      state.items = [];
    },
  },
});

export const {
  setBun,
  setItems,
  removeBun,
  removeItem,
  updateSortItems,
  resetConstructor,
} = ingredientsConstructorSlice.actions;
export default ingredientsConstructorSlice.reducer;
