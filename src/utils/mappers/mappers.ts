import { IIngredientItems } from "../../store/ingredients/slice";

export const mappingForIngredients = (dataArr: IIngredientItems[]) => {
  const mappedData: Record<string, IIngredientItems[]> = {};

  if (dataArr.length) {
    dataArr.forEach((item) => {
      if (item.type in mappedData) {
        mappedData[item.type] = [...mappedData[item.type], item];
      } else {
        mappedData[item.type] = [item];
      }
    });
  }
  return mappedData;
};

export const mappingForConstructor = (dataArr: IIngredientItems[]) => {
  const staticItems: IIngredientItems[] = [];
  const dragableItems: IIngredientItems[] = [];

  if (dataArr.length) {
    dataArr.forEach((item) => {
      if (item.type === "bun") {
        staticItems.push(item);
      } else {
        dragableItems.push(item);
      }
    });
  }

  return { staticItems, dragableItems };
};
