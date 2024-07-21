import { getOrder } from "../order.api";

describe("Order API", () => {
  const fetchSpy = jest.spyOn(global, "fetch");

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be return success fetch", async () => {
    // fetchSpy.mockImplementation(() => {
    //   return Promise.resolve({
    //     ok: true,
    //     json: jest.fn()
    //   })
    // })

    fetchSpy.mockResolvedValueOnce({
      ok: true,
      json: jest.fn(),
    });

    await getOrder(76872);

    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  it('should be return reject promise', async () => {
    
    fetchSpy.mockImplementationOnce(() => Promise.resolve({
      ok: false,
      status: 404,
      json() {
        return Promise.reject(new Error('Some error'))
      }
    }))

    let errorMessage = ''

    try {
      await getOrder(76872);
    } catch (error) {
      errorMessage = error.message
    }
    expect(errorMessage).toBe('Some error')
    expect(fetchSpy).toHaveBeenCalledTimes(1);


  });

});
