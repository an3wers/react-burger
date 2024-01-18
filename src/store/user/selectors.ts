import { RootState } from "../store";

const selectUserModule = (state: RootState) => {
  return state.user;
};

export const selectCurrentUser = (state: RootState) => {
  return selectUserModule(state).user;
};

export const selectIsChecked = (state: RootState) => {
  return selectUserModule(state).isAuthChecked;
};
