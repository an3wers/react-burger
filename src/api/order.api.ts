import { baseApi } from "./baseApi";
import { fetchWithRefresh } from "./fetchWithRefresh";
import { ICreateOrderRequestData, IOrderResponse } from "./types";

export const sendOrder = async (
  data: ICreateOrderRequestData,
  token: string
): Promise<IOrderResponse> => {
  const endPoint = "/orders";
  return await fetchWithRefresh<IOrderResponse>(baseApi + endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify(data),
  });
};
