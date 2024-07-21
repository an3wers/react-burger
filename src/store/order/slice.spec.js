import reducer, { orderSlice, resetOrder, setError } from "./slice";
import { createOrder, getOrderByNumber } from './api'

let initialState;
beforeEach(() => {
  initialState = {
    orderDetails: null,
    currentOrder: null,
    isLoading: false,
    error: null,
  };
});


describe("Order slice reducers", () => {

  it("should be return initial state", () => {
    const state = reducer(initialState, { type: "" });

    expect(state).toBe(initialState);
  });

  it("should be reset state", () => {
    initialState = {
      orderDetails: {
        ingredients: [],
        owner: {},
        status: "success",
        name: "Some name",
        createdAt: "20.12.2015",
        updatedAt: "20.12.2015",
        number: 78234,
        price: 500,
      },
      currentOrder: {
        _id: "v_909234",
        ingredients: [],
        owner: "Some owner",
        status: "success",
        name: "Some name",
        createdAt: "20.12.2015",
        updatedAt: "20.12.2015",
        number: 82934,
        __v: 90234,
      },
      isLoading: false,
      error: "Some error",
    };

    const action = {
      type: resetOrder.type,
      payload: null,
    };

    const state = reducer(initialState, action);

    expect(state.orderDetails).toBeNull();
    expect(state.error).toBeNull();
  });

  it("should be set error to state", () => {
    const action = {
      type: setError.type,
      payload: "Some error",
    };

    const state = reducer(initialState, action);

    expect(state.error).toBe("Some error");
  });
});

describe("Order slice extraReducers", () => {
  
  it('should be set is loading status to state', () => {
    const state = reducer(initialState, createOrder.pending())
    expect(state.isLoading).toBe(true)
    expect(state.error).toBeNull()
  })

  // TODO: Create other tests

})
