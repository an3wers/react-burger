import checkResponse from "../utils/api/check-response";
import { baseApi } from "./baseApi";
import { fetchWithRefresh } from "./fetchWithRefresh";
import {
  IConfirmResetPasswordRequestData,
  IGetUserResponse,
  ILoginResponse,
  ILogoutRequestData,
  ILogoutResponse,
  IRegisterRequestData,
  IRegisterResponse,
  IResetPasswordRequestData,
  IResetPasswordResponse,
  IUpdateUserRequestData,
  TLoginRequestData,
} from "./types";

export const resetPassword = async (
  data: IResetPasswordRequestData
): Promise<IResetPasswordResponse> => {
  const endPoint = "/password-reset";
  return await fetch(baseApi + endPoint, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then(checkResponse<IResetPasswordResponse>);
};

export const confirmResetPassword = async (
  data: IConfirmResetPasswordRequestData
): Promise<IResetPasswordResponse> => {
  const endPoint = "/password-reset/reset";
  return await fetch(baseApi + endPoint, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then(checkResponse<IResetPasswordResponse>);
};

export const createUser = async (
  data: IRegisterRequestData
): Promise<IRegisterResponse> => {
  const endPoint = "/auth/register";
  return await fetch(baseApi + endPoint, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then(checkResponse<IRegisterResponse>);
};


export const loginUser = async (
  data: TLoginRequestData
): Promise<ILoginResponse> => {
  const endPoint = "/auth/login";
  return await fetch(baseApi + endPoint, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then(checkResponse<ILoginResponse>);
};

export const logoutUser = async (
  data: ILogoutRequestData
): Promise<ILogoutResponse> => {
  const endPoint = "/auth/logout";
  return await fetch(baseApi + endPoint, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then(checkResponse<ILogoutResponse>);
};

export const getUser = async (token: string): Promise<IGetUserResponse> => {
  const endPoint = "/auth/user";
  return await fetchWithRefresh<IGetUserResponse>(baseApi + endPoint, {
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  });
};

export const updateUser = async (
  data: IUpdateUserRequestData,
  token: string
): Promise<IGetUserResponse> => {
  const endPoint = "/auth/user";
  return await fetchWithRefresh<IGetUserResponse>(baseApi + endPoint, {
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    method: "PATCH",
    body: JSON.stringify(data),
  });
};
