import checkReponse from "../utlils/api/check-response";
import { baseApi } from "./baseApi";

export const getIngredients = async () => {
  const endPoint = "/ingredients";
  return await fetch(baseApi + endPoint, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkReponse);
};
