const selectIngredientDetailsModule = (state) => state.ingredientDetails;

export const selectIngredientDetails = (state) =>
  selectIngredientDetailsModule(state).ingridient;
