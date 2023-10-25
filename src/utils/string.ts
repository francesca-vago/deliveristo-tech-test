import { BreedT } from "../types/BreedT";

export const upperCaseWords = (text: string) =>
  text
    .split(" ")
    .map((word) => {
      const firstLetter = word.substring(0, 1);
      const rest = word.substring(1);

      return `${firstLetter.toUpperCase()}${rest}`;
    })
    .join(" ");

export const formatBreed = (breed: BreedT) => {
  const breedName = [breed.subBreed, breed.breed].filter(Boolean).join(" ");

  return upperCaseWords(breedName);
};

/**
 * Utility to join classes conditionally.
 * A (very) simplified version of the `clsx` package
 */
export const clsx = (...classes: unknown[]) =>
  classes.filter((c) => typeof c === "string").join(" ");
