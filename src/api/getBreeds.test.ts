import { describe, expect, test } from "vitest";
import { createSuccessResponse, mockFetch } from "../../tests/mocks/mockFetch";
import { getBreedList } from "./getBreeds";

describe("getBreeds", () => {
  test("it fetches and returns a list of breeds and sub breeds", async () => {
    mockFetch.mockResolvedValue(
      createSuccessResponse({
        message: {
          shiba: [],
        },
        status: "success",
      })
    );

    const response = await getBreedList();

    expect(mockFetch).toHaveBeenCalled();
    expect(response).toStrictEqual([
      {
        breed: "shiba",
        subBreeds: [],
      },
    ]);
  });
});
