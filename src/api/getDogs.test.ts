import { describe, expect, test } from "vitest";
import {
  createSuccessResponse,
  mockFetch,
} from "../../tests/unit/mocks/mockFetch";
import {
  getDogListByBreed,
  getDogListBySubBreed,
  getRandomDogByBreed,
  getRandomDogBySubBreed,
} from "./getDogs";

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

describe("getDogListByBreed", () => {
  test("it fetches and returns a list of dog images by breed", async () => {
    mockFetch.mockResolvedValue(
      createSuccessResponse({
        message: [
          "https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg",
          "https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg",
          "https://images.dog.ceo/breeds/akita/Akita_Inu_dog.jpg",
          "https://images.dog.ceo/breeds/akita/Akita_hiking_in_Shpella_e_Pellumbasit.jpg",
          "https://images.dog.ceo/breeds/akita/Akita_inu_blanc.jpg",
          "https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg",
          "https://images.dog.ceo/breeds/akita/Japaneseakita.jpg",
        ],
        status: "success",
      })
    );

    const response = await getDogListByBreed("akita");

    expect(mockFetch).toHaveBeenCalled();
    expect(response).toHaveLength(7);
  });
});

describe("getDogListBySubBreed", () => {
  test("it fetches and returns a list of dog images by sub breed", async () => {
    mockFetch.mockResolvedValue(
      createSuccessResponse({
        message: [
          "https://images.dog.ceo/breeds/bulldog-french/IMG_0846.jpg",
          "https://images.dog.ceo/breeds/bulldog-french/IMG_1657.jpg",
        ],
        status: "success",
      })
    );

    const response = await getDogListBySubBreed("bulldog", "frenchß");

    expect(mockFetch).toHaveBeenCalled();
    expect(response).toHaveLength(2);
  });
});
