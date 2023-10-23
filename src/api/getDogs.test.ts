import { describe, expect, test } from "vitest";
import { createSuccessResponse, mockFetch } from "../../tests/mocks/mockFetch";
import { getRandomDogByBreed } from "./getDogs";

describe("getRandomDogByBreed", () => {
  test("it fetches and returns a random image of a dog by breed", async () => {
    mockFetch.mockResolvedValue(
      createSuccessResponse({
        message: "https://images.dog.ceo/breeds/shiba/shiba-18.jpg",
        status: "success",
      })
    );

    const response = await getRandomDogByBreed("shiba");

    expect(mockFetch).toHaveBeenCalled();
    expect(response).toStrictEqual(
      "https://images.dog.ceo/breeds/shiba/shiba-18.jpg"
    );
  });
});
