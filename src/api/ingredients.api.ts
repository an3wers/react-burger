import checkResponse from "../utils/api/check-response";
import { baseApi } from "./baseApi";
import { IIngredientsResponse } from "./types";

export const getIngredients = async (): Promise<IIngredientsResponse> => {
  const endPoint = "/ingredients";
  return await fetch(baseApi + endPoint, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse<IIngredientsResponse>);
};
