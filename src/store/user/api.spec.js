import { createUser } from "./api";

describe("userThunk", () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  });

  it("should be create user with resolved response", async () => {
    const mockCreateUserData = {
      email: "test@example.com",
      password: "password",
      name: "Jhone Doe",
    };

    fetch.mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          success: true,
          user: {
            name: mockCreateUserData.name,
            email: mockCreateUserData.email,
          },
          accessToken: "123",
          refreshToken: "123",
        }),
    });

    const dispatch = jest.fn();
    const thunk = createUser(mockCreateUserData);

    await thunk(dispatch, () => ({}));

    const { calls } = dispatch.mock;

    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe(createUser.pending().type);
    expect(end[0].type).toBe(createUser.fulfilled().type);
    expect(end[0].payload).toEqual({
      email: "test@example.com",
      name: "Jhone Doe",
    });
  });

  it("should be create user with rejected response", async () => {
    const mockCreateUserData = {
      email: "test@example.com",
      password: "password",
      name: "Jhone Doe",
    };

    fetch.mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({ message: "Create user error" }),
    });

    const dispatch = jest.fn();
    const thunk = createUser(mockCreateUserData);

    await thunk(dispatch, () => ({}));

    const { calls } = dispatch.mock;

    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe(createUser.pending().type);
    expect(end[0].type).toBe(createUser.rejected().type);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
});
