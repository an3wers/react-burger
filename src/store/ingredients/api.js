import { createAsyncThunk } from "@reduxjs/toolkit";
import { getIngredients } from "../../api/ingredients.api";

export const fetchIngredients = createAsyncThunk(
  "ingridients/fetchIngredients",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getIngredients();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
