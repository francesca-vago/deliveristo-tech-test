import { expect, test, vi, Mock, describe } from "vitest";
import { fetchDecode } from "./utils";
import { z } from "zod";

type Fetch = typeof global.fetch;

const fetch: Mock<Parameters<Fetch>, ReturnType<Fetch>> = (global.fetch =
  vi.fn() as any);

function createSuccessResponse(data: unknown) {
  return {
    json: () => Promise.resolve(data),
    ok: true,
  } as Response;
}

function createFailedResponse(data: unknown) {
  return {
    json: () => Promise.resolve(data),
    ok: false,
  } as Response;
}

describe("fetchDecode", () => {
  test("it makes a GET request and returns the decoded result", async () => {
    const TestZ = z.string();
    fetch.mockResolvedValue(createSuccessResponse("test"));

    const response = await fetchDecode("https://example.com", TestZ);

    expect(fetch).toHaveBeenCalledWith("https://example.com");
    expect(response).toBe("test");
  });

  test("it makes a GET request and throws an error if reponse not ok", async () => {
    const TestZ = z.string();
    fetch.mockResolvedValue(createFailedResponse("test"));

    expect(() =>
      fetchDecode("https://example.com", TestZ)
    ).rejects.toThrowError();
    expect(fetch).toHaveBeenCalledWith("https://example.com");
  });

  test("it makes a GET request and throws an error if reponse type doesn't match defined type", async () => {
    const TestZ = z.number();
    fetch.mockResolvedValue(createSuccessResponse("test"));

    expect(() =>
      fetchDecode("https://example.com", TestZ)
    ).rejects.toThrowError();
    expect(fetch).toHaveBeenCalledWith("https://example.com");
  });
});
