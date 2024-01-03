import checkReponse from "../utils/api/check-response";
import { baseApi } from "./baseApi";
import { fetchWithRefresh } from "./fetchWithRefresh";

export const sendOrder = async (data, token) => {
  const endPoint = "/orders";

  return await fetchWithRefresh(baseApi + endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify(data),
  });
};
