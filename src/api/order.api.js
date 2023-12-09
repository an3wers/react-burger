import checkReponse from "../utlils/api/check-response";
import { baseApi } from "./baseApi";

export const sendOrder = async (data) => {
  const endPoint = "/orders";
  return await fetch(baseApi + endPoint, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then(checkReponse);
};
