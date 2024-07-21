import reducer, { setUser, setAuthChecked } from "./slice";
import { createUser, loginUser, logoutUser, updateUser } from "./api";

describe("User slice reducers", () => {
  let initialState;

  beforeEach(() => {
    // Base state
    initialState = {
      user: null,
      isAuthChecked: false,
    };
  });

  it("should be return initial state", () => {
    const state = reducer(initialState, { type: "" });
    expect(state).toBe(initialState);
  });

  it("should be set boolean value with setAuthChecked action to isAuthChecked field", () => {
    const action = { type: setAuthChecked.type, payload: true };

    const updatedState = reducer(initialState, action);

    expect(updatedState.isAuthChecked).toEqual(true);
  });

  it("should be set user entity ro state", () => {
    const testUser = {
      email: "test@example.com",
      name: "Jhone Doe",
    };

    const action = { type: setUser.type, payload: testUser };

    const updatedState = reducer(initialState, action);

    expect(updatedState.user).not.toBe(null);
    expect(updatedState.user).toBe(testUser);
  });
});

describe("User slice extraReducers", () => {
  let initialState;

  beforeAll(() => {
    // Не понятно нужно ли использовать
    // jest.mock('./api', () => ({
    //   createUser: jest.fn()
    // }))
  });

  beforeEach(() => {
    // Base state
    initialState = {
      user: null,
      isAuthChecked: false,
    };
  });

  it("should be set user after create", () => {
    const mockUser = {
      email: "test@example.com",
      name: "Jhone Doe",
    };

    const state = reducer(initialState, createUser.fulfilled(mockUser));

    expect(state.user).toBe(mockUser);
    expect(state.isAuthChecked).toBe(true);
  });

  it("should be set user after login", () => {
    const mockUser = {
      email: "test@example.com",
      name: "Jhone Doe",
    };

    const state = reducer(initialState, loginUser.fulfilled(mockUser));

    expect(state.user).toBe(mockUser);
    expect(state.isAuthChecked).toBe(true);
  });

  it("should be user is null after logout", () => {
    const state = reducer(initialState, logoutUser.fulfilled());
    expect(state.user).toBeNull();
  });

  it("should be set updated user", () => {
    initialState = {
      user: {
        email: "test@example.com",
        name: "Jhone Doe",
      },
      isAuthChecked: true,
    };

    const updatedUser = {
      email: "new@example.com",
      name: "Jhone Doe",
    };

    const newState = reducer(initialState, updateUser.fulfilled(updatedUser));

    expect(newState.user).toBe(updatedUser);
  });
});
