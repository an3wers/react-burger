import { RootState } from "../store";

const selectIngredientsConstructorModule = (state: RootState) =>
  state.ingredientsConstructor;

export const selectIngredientsConstructorBun = (state: RootState) => {
  return selectIngredientsConstructorModule(state).bun;
};

export const selectIngredientsConstructorItems = (state: RootState) => {
  return selectIngredientsConstructorModule(state).items;
};
