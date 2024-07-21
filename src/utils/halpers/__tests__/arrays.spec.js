/* eslint-disable jest/no-mocks-import */
import {
  basketWithNoQuantity,
  filteredBasketWithQuantityOnly,
} from "../__mocks__/arrays.mock";
import { filterArray } from "../arrays";

describe("Arrays", () => {
  const cb = jest.fn();
  const logSpy = jest.spyOn(console, 'log')

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should not invoke callback when an array is empty", () => {
    filterArray([], cb);

    expect(cb).not.toHaveBeenCalled();
    expect(logSpy).not.toHaveBeenCalled();
  });

  it("should invoke provided function as many time as the length of an array", () => {
    const array = [1, 2, 3];

    filterArray(array, cb);

    expect(cb).toHaveBeenCalledTimes(+array.length);
    expect(logSpy).toHaveBeenCalledTimes(+array.length);
  });

  it("should filter an array using provided predicate", () => {
    const hasQuality = (order) => {
      return order.qty > 0;
    };

    const result = filterArray(basketWithNoQuantity, hasQuality);

    expect(result).toEqual(filteredBasketWithQuantityOnly);
    
  });
});
