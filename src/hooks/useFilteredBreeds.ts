import { useMemo } from "react";
import { Breeds } from "../api/getBreeds";

export const filterBreeds = (breeds: Breeds, query?: string) => {
  if (!query) {
    return breeds;
  }

  // Creates a RegExp that match the query string in a case insensitive way
  const queryRegex = new RegExp(query, "i");

  // Filters breeds that contains the query directly or in some of the sub breeds
  const filteredBreeds = breeds.filter(
    (breed) =>
      breed.breed.match(queryRegex) ||
      breed.subBreeds.some((subBreed) => subBreed.match(queryRegex))
  );

  // Filters the sub breeds for the remaining breeds
  const filteredSubBreeds = filteredBreeds.map((breed) =>
    !breed.subBreeds.length
      ? breed
      : {
          ...breed,
          subBreeds: breed.subBreeds.filter((subBreed) =>
            subBreed.match(queryRegex)
          ),
        }
  );

  return filteredSubBreeds;
};

export const useFilteredBreeds = (breeds: Breeds, query?: string) =>
  useMemo(() => filterBreeds(breeds, query), [breeds, query]);
