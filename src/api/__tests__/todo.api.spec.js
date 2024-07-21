import { createTodo, createTodoOnServer } from "../todo.api";

const mockedV4 = jest.fn(() => "123");

jest.mock("uuid", () => ({
  ...jest.requireActual("uuid"),
  v4: () => mockedV4() || "123", // mockedV4 почему-то возвращает undefined
}));

describe("Todo", () => {
  const mockTodo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  // global.fetch = jest.fn(() =>
  //   Promise.resolve({
  //     ok: true,
  //     json: () => Promise.resolve(mockTodo),
  //   })
  // );

  // global.fetch = jest.fn().mockImplementationOnce(() =>
  //   Promise.resolve({
  //     ok: true,
  //     // json: () => Promise.resolve(mockTodo),
  //   })
  // );

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockTodo),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it("should be return todo object with provided title, comleted and id", () => {
    const title = "Learn jest";
    const expectedResult = { title, completed: false, id: "123" };
    const result = createTodo(title);

    expect(mockedV4).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expectedResult);
  });

  it("should be create todo on server", async () => {
    const result = await createTodoOnServer("some title");

    expect(result).toEqual(mockTodo);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("should throw an error if fetch response is not ok", async () => {
    fetch.mockResolvedValueOnce({ ok: false });
    const fnToThrow = async () => await createTodoOnServer("some title");
    await expect(fnToThrow).rejects.toThrow("Could not create todo");
  });
});
