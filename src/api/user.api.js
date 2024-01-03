import checkReponse from "../utils/api/check-response";
import { baseApi } from "./baseApi";
import { fetchWithRefresh } from "./fetchWithRefresh";

export const resetPassword = async (data) => {
  const endPoint = "/password-reset";
  return await fetch(baseApi + endPoint, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then(checkReponse);
};

export const confirmResetPassword = async (data) => {
  const endPoint = "/password-reset/reset";
  return await fetch(baseApi + endPoint, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then(checkReponse);
};

export const createUser = async (data) => {
  const endPoint = "/auth/register";
  return await fetch(baseApi + endPoint, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then(checkReponse);
};

export const loginUser = async (data) => {
  const endPoint = "/auth/login";
  return await fetch(baseApi + endPoint, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then(checkReponse);
};

export const logoutUser = async (data) => {
  const endPoint = "/auth/logout";
  return await fetch(baseApi + endPoint, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then(checkReponse);
};

export const getUser = async (token) => {
  const endPoint = "/auth/user";
  return await fetchWithRefresh(baseApi + endPoint, {
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  });
};

export const updateUser = async (data, token) => {
  const endPoint = "/auth/user";
  return await fetchWithRefresh(baseApi + endPoint, {
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    method: "PATCH",
    body: JSON.stringify(data),
  });
};
