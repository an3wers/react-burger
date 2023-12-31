export const mappingForIngredients = (dataArr) => {
  const mappedData = {};

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

export const mappingForConstructor = (dataArr) => {
  const staticItems = [];
  const dragableItems = [];

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
