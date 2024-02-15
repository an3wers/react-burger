import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchIngredients } from "./api";
import { IIngredient } from "../../utils/types/ingredients.type";

export interface IIngredientItems extends IIngredient {
  qty: number;
}

interface IState {
  items: IIngredientItems[];
  isLoading: boolean;
  error: string | null;
}

interface IUpdateItemQtyPayload {
  id: string;
  type: string;
  act: "add" | "remove";
}

const initialState: IState = {
  items: [],
  isLoading: false,
  error: null,
};

export const ingridientsSlice = createSlice({
  name: "ingridients",
  initialState,
  reducers: {
    updateItemQty: (state, action: PayloadAction<IUpdateItemQtyPayload>) => {
      const { id, type, act } = action.payload;

      if (type === "bun") {
        state.items = state.items.map((item) => {
          if (item.type === "bun" && item._id !== id) {
            return { ...item, qty: 0 };
          } else if (item.type === "bun" && item._id === id) {
            return { ...item, qty: 2 };
          }
          return item;
        });
      } else {
        state.items = state.items.map((item) => {
          if (item._id === id) {
            return {
              ...item,
              qty: act === "add" ? item.qty + 1 : item.qty - 1,
            };
          }
          return item;
        });
      }
    },
    resetItemsQty: (state) => {
      state.items = state.items.map((item) => ({ ...item, qty: 0 }));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.map((item) => ({ ...item, qty: 0 }));
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.items = [];
        state.isLoading = false;
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export const { updateItemQty, resetItemsQty } = ingridientsSlice.actions;
export default ingridientsSlice.reducer;
