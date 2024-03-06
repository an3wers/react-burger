import checkResponse from "../utils/api/check-response";
import { baseApi } from "./baseApi";
import { fetchWithRefresh } from "./fetchWithRefresh";
import {
  ICreateOrderRequestData,
  IOrderInfoResponse,
  IOrderResponse,
} from "./types";

const endPoint = "/orders";

export const sendOrder = async (
  data: ICreateOrderRequestData,
  token: string
): Promise<IOrderResponse> => {
  return await fetchWithRefresh<IOrderResponse>(baseApi + endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify(data),
  });
};

export const getOrder = async (
  orderNumber: number
): Promise<IOrderInfoResponse> => {
  return await fetch(`${baseApi + endPoint}/${orderNumber}`, {
    headers: { "Content-Type": "application/json" },
  }).then(checkResponse<IOrderInfoResponse>);
};
