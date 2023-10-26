import { useQuery } from "@tanstack/react-query";
import { getRandomDogByBreed, getRandomDogBySubBreed } from "../../api/getDogs";
import { BreedT } from "../../types/BreedT";

export const randomDogImageQueryKey = (breed: BreedT) => ["randomImage", breed];

const getRandomDogImage = (breed: BreedT, signal: AbortSignal) =>
  breed.subBreed
    ? getRandomDogBySubBreed(breed.breed, breed.subBreed, signal)
    : getRandomDogByBreed(breed.breed, signal);

export const useRandomDogImage = (breed: BreedT) =>
  useQuery({
    queryKey: randomDogImageQueryKey(breed),
    queryFn: ({ signal }) => getRandomDogImage(breed, signal),
    refetchOnWindowFocus: false,
  });
