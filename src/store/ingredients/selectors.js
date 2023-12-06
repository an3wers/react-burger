const selectIngredientsModule = (state) => state.ingredients;

export const selectIngredientsState = (state) => {
  return selectIngredientsModule(state);
};
