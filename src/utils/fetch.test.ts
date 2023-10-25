import { expect, test, describe } from "vitest";
import { fetchDecode } from "./fetch";
import { z } from "zod";
import {
  createFailedResponse,
  createSuccessResponse,
  mockFetch,
} from "../../tests/mocks/mockFetch";

describe("fetchDecode", () => {
  test("it makes a GET request and returns the decoded result", async () => {
    const TestZ = z.string();
    mockFetch.mockResolvedValue(createSuccessResponse("test"));

    const response = await fetchDecode("https://example.com", TestZ);

    expect(mockFetch).toHaveBeenCalledWith("https://example.com", {
      signal: undefined,
    });
    expect(response).toBe("test");
  });

  test("it makes a GET request and throws an error if reponse not ok", async () => {
    const TestZ = z.string();
    mockFetch.mockResolvedValue(createFailedResponse("test"));

    expect(() =>
      fetchDecode("https://example.com", TestZ)
    ).rejects.toThrowError();
    expect(mockFetch).toHaveBeenCalledWith("https://example.com", {
      signal: undefined,
    });
  });

  test("it makes a GET request and throws an error if reponse type doesn't match defined type", async () => {
    const TestZ = z.number();
    mockFetch.mockResolvedValue(createSuccessResponse("test"));

    expect(() =>
      fetchDecode("https://example.com", TestZ)
    ).rejects.toThrowError();
    expect(mockFetch).toHaveBeenCalledWith("https://example.com", {
      signal: undefined,
    });
  });
});
