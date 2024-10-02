import { baseApi } from "./baseApi";
import { createUser } from "./user.api";

describe("Check createUser func", () => {
  const endPoint = "/auth/register";
  const testUser = {
    email: "test@example.com",
    password: "password",
    name: "test name",
  };

  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        result: "Ok",
      }),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should be success", async () => {
    const result = await createUser(testUser);

    expect(result).toEqual({ result: "Ok" });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("should be fail", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        json() {
          return Promise.resolve('error');
        },
        status: 404,
      })
    );

    await expect(createUser(testUser)).rejects.toBe('error');
    expect(fetch).toBeCalledWith(baseApi + endPoint, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(testUser),
    });
  });
});
