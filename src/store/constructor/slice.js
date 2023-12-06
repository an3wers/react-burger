import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bun: null,
  items: [],
};

export const constructorSlice = createSlice({
  name: "constructor",
  initialState,
  reducers: {},
});
