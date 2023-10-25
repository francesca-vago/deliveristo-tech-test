import { describe, expect, test } from "vitest";
import { filterBreeds } from "./useFilteredBreeds";

describe("filteredBreeds", () => {
  test("should return the original list if query is not provided", () => {
    const result = filterBreeds([{ breed: "Test Breed", subBreeds: [] }]);

    expect(result).toStrictEqual([{ breed: "Test Breed", subBreeds: [] }]);
  });

  test("should return the original list if query is an empty string", () => {
    const result = filterBreeds([{ breed: "Test Breed", subBreeds: [] }], "");

    expect(result).toStrictEqual([{ breed: "Test Breed", subBreeds: [] }]);
  });

  test("should filter the breeds that contains the searched query", () => {
    const result = filterBreeds(
      [
        { breed: "Shiba Inu", subBreeds: [] },
        { breed: "Akita Inu", subBreeds: [] },
      ],
      "Shiba"
    );

    expect(result).toStrictEqual([{ breed: "Shiba Inu", subBreeds: [] }]);
  });

  test("should filter the breeds that contains the searched query case insensitive", () => {
    const result = filterBreeds(
      [
        { breed: "Shiba Inu", subBreeds: [] },
        { breed: "Akita Inu", subBreeds: [] },
      ],
      "sHiBa"
    );

    expect(result).toStrictEqual([{ breed: "Shiba Inu", subBreeds: [] }]);
  });

  test("should filter the sub breeds that contains the searched query", () => {
    const result = filterBreeds(
      [{ breed: "bulldog", subBreeds: ["boston", "english", "french"] }],
      "english"
    );

    expect(result).toStrictEqual([
      { breed: "bulldog", subBreeds: ["english"] },
    ]);
  });

  test("should filter the sub breeds that contains the searched query case insensitive", () => {
    const result = filterBreeds(
      [{ breed: "bulldog", subBreeds: ["boston", "english", "french"] }],
      "eNgLiSh"
    );

    expect(result).toStrictEqual([
      { breed: "bulldog", subBreeds: ["english"] },
    ]);
  });

  test("should filter out the breeds that doesn't contain the searched query directly or in any sub breeds", () => {
    const result = filterBreeds(
      [
        { breed: "bulldog", subBreeds: ["boston", "english", "french"] },
        { breed: "australian", subBreeds: ["shepherd"] },
      ],
      "english"
    );

    expect(result).toStrictEqual([
      { breed: "bulldog", subBreeds: ["english"] },
    ]);
  });
});
