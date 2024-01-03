import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser, logoutUser, updateUser } from "./api";

const initialState = {
  user: null,
  isAuthChecked: false,
};

export const userSlise = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthChecked: (state, action) => {
      state.isAuthChecked = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthChecked = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthChecked = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload
      })
  },
});

export const { setUser, setAuthChecked } = userSlise.actions;
export default userSlise.reducer;

