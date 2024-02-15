import { baseApi } from "./baseApi";
import checkResponse from "../utils/api/check-response";
import { IFetchOptions, IRefreshTokenResponse } from "./types";

export const refreshToken = (): Promise<IRefreshTokenResponse> => {
  return fetch(`${baseApi}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(checkResponse<IRefreshTokenResponse>);
};

export const fetchWithRefresh = async <T>(
  url: string,
  options: IFetchOptions
) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse<T>(res);
  } catch (err) {
    if ((err as Error).message === "jwt expired") {
      const refreshData = await refreshToken(); //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      options.headers!.authorization = refreshData.accessToken;
      const res = await fetch(url, options); //повторяем запрос
      return await checkResponse<T>(res);
    } else {
      return Promise.reject(err);
    }
  }
};
