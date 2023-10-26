import { useQuery } from "@tanstack/react-query";
import { getDogListByBreed, getDogListBySubBreed } from "../../api/getDogs";
import { BreedT } from "../../types/BreedT";

export const dogImagesListQueryKey = (breed: BreedT) => ["imagesList", breed];

const getDogImagesListByBreed = (breed: BreedT, signal: AbortSignal) =>
  breed.subBreed
    ? getDogListBySubBreed(breed.breed, breed.subBreed, signal)
    : getDogListByBreed(breed.breed, signal);

export const useDogImagesList = (breed: BreedT) =>
  useQuery({
    queryKey: dogImagesListQueryKey(breed),
    queryFn: ({ signal }) => getDogImagesListByBreed(breed, signal),
  });
