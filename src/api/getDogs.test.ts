import { describe, expect, test } from "vitest";
import { createSuccessResponse, mockFetch } from "../../tests/mocks/mockFetch";
import { getRandomDogByBreed, getRandomDogBySubBreed } from "./getDogs";

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

describe("getRandomDogBySubBreed", () => {
  test("it fetches and returns a random image of a dog by sub breed", async () => {
    mockFetch.mockResolvedValue(
      createSuccessResponse({
        message:
          "https://images.dog.ceo/breeds/bulldog-french/n02108915_4474.jpg",
        status: "success",
      })
    );

    const response = await getRandomDogBySubBreed("bulldog", "french");

    expect(mockFetch).toHaveBeenCalled();
    expect(response).toStrictEqual(
      "https://images.dog.ceo/breeds/bulldog-french/n02108915_4474.jpg"
    );
  });
});
