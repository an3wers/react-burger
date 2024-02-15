import { RootState } from "../store";

const selectIngredientsModule = (state: RootState) => state.ingredients;

export const selectIngredientsState = (state: RootState) => {
  return selectIngredientsModule(state);
};

export const selectIngredientsSingle = (state: RootState, id: string) => {
  return selectIngredientsModule(state).items.find((item) => item._id === id);
};
