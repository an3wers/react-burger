import checkResponse from "./check-response";

describe("checkResponse func", () => {
  it("should be success result", () => {
    const testResponse = {
      ok: true,
      json() {
        return { result: "success" };
      },
    };

    const res = checkResponse(testResponse);

    expect(res).toEqual({ result: "success" });
  });

  it("should be fail", () => {
    const testResponse = {
      ok: false,
      status: 404,
      json() {
        return Promise.reject('error');
      },
    };

    return expect(checkResponse(testResponse)).rejects.toMatch('error');
  });

});
