const selectIngredientsConstructorModule = (state) => state.ingredientsConstructor;

export const selectIngredientsConstructorBun = (state) => {
  return selectIngredientsConstructorModule(state).bun;
};

export const selectIngredientsConstructorItems = (state) => {
  return selectIngredientsConstructorModule(state).items;
};
