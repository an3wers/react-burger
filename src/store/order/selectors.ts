import { RootState } from "../store";

const selectOrderModule = (state: RootState) => state.order;

export const selectCurrentOrderState = (state: RootState) => {
  return selectOrderModule(state);
}
