import { createAsyncThunk } from "@reduxjs/toolkit";
import { getIngredients } from "../../api/ingredients.api";
import { IIngredient } from "../../utils/types/ingredients.type";
import { IThunkConfig } from "../types";

export const fetchIngredients = createAsyncThunk<
  IIngredient[],
  unknown,
  IThunkConfig
>("ingridients/fetchIngredients", async (_, { rejectWithValue }) => {
  try {
    const { data } = await getIngredients();
    return data;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
