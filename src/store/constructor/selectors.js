const selectIngredientsConstructorModule = (state) =>
  state.ingredientsConstructor;

export const selectIngredientsConstructorBun = (state) => {
  return selectIngredientsConstructorModule(state).bun;
};

export const selectIngredientsConstructorItems = (state) => {
  return selectIngredientsConstructorModule(state).items;
};

export const selectTotalSum = (state) => {
  let sum = 0;
  const items = selectIngredientsConstructorItems(state);
  const bun = selectIngredientsConstructorBun(state);

  if (items.length) {
    items.forEach((item) => {
      sum += item.price;
    });
  }

  if (bun) {
    sum += bun.price * 2;
  }

  return sum;
};
