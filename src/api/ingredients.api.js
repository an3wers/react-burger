import checkReponse from "../utlils/api/check-response";

const baseApi = "https://norma.nomoreparties.space/api";

export const getIngredients = async () => {
  const endPoint = "/ingredients";
  return await fetch(baseApi + endPoint).then(checkReponse);
};
