const selectOrderModule = (state) => state.order;

export const selectCurrentOrderState = (state) => {
  return selectOrderModule(state);
}
