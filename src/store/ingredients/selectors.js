const selectIngredientsModule = (state) => state.ingredients;

export const selectIngredientsState = (state) => {
  return selectIngredientsModule(state);
};

export const selectIngredientsSingle = (state, id) => {
  return selectIngredientsModule(state).items.find((item) => item._id === id);
}
