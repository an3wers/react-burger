import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userApi from "../../api/user.api";
// import { setUser, setAuthChecked } from "./slice";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await userApi.createUser(userData);
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      return res.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await userApi.loginUser(userData);
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      return res.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("refreshToken");
      await userApi.logoutUser({ token });
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async (data, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await userApi.updateUser(data, token)
      return res.user
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
