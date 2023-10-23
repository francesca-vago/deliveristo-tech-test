import { z } from "zod";
import { fetchDecode } from "./utils";
import { ResponseZ } from "./types";

export const BreedZ = z.record(z.array(z.string()));

export type BreedT = z.infer<typeof ResponseZ>;

export const getBreedList = async (signal?: AbortSignal) => {
  const response = await fetchDecode(
    `https://dog.ceo/api/breeds/list/all`,
    ResponseZ,
    signal
  );

  const breedMap = Object.entries(response.message).map(
    ([breed, subBreeds]) => ({
      breed,
      subBreeds,
    })
  );

  return breedMap;
};
