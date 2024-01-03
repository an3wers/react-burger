const selectUserModule = (state) => {
  return state.user;
};

export const selectCurrentUser = (state) => {
  return selectUserModule(state).user;
};

export const selectIsChecked = (state) => {
  return selectUserModule(state).isAuthChecked;
};
