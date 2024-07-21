export const filterArray = (arr, cb) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {

    console.log(arr[i]);

    if (cb(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};
