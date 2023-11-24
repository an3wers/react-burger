const baseApi = "https://norma.nomoreparties.space/api";

export const getIngredients = async () => {
  const endPoint = "/ingredients";
  const response = await fetch(baseApi + endPoint);
  const data = await response.json();
  return data;
};
