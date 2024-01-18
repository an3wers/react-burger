import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userApi from "../../api/user.api";
import {
  IRegisterRequestData,
  IUpdateUserRequestData,
  TLoginRequestData,
} from "../../api/types";
import { IUser } from "../../utils/types/user.type";
import { IThunkConfig } from "../types";

export const createUser = createAsyncThunk<
  IUser,
  IRegisterRequestData,
  IThunkConfig
>("user/createUser", async (userData, { rejectWithValue }) => {
  try {
    const res = await userApi.createUser(userData);
    localStorage.setItem("accessToken", res.accessToken);
    localStorage.setItem("refreshToken", res.refreshToken);
    return res.user;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const loginUser = createAsyncThunk<IUser, TLoginRequestData>(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await userApi.loginUser(userData);
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      return res.user;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const logoutUser = createAsyncThunk<unknown, unknown, IThunkConfig>(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("refreshToken");
      if (token) {
        await userApi.logoutUser({ token });
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      } else {
        throw new Error("Токен не найден");
      }
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const updateUser = createAsyncThunk<
  IUser,
  IUpdateUserRequestData,
  IThunkConfig
>("user/update", async (data, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const res = await userApi.updateUser(data, token);
      return res.user;
    } else {
      throw new Error("Токен не найден");
    }
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
