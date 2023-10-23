import { z } from "zod";
import { fetchDecode } from "./utils";
import { ResponseZ } from "./types";

const BreedZ = z.record(z.array(z.string()));
const BreedResponseZ = ResponseZ(BreedZ);

export type Breeds = {
  breed: string;
  subBreeds: string[];
}[];

export const getBreedList = async (signal?: AbortSignal): Promise<Breeds> => {
  const response = await fetchDecode(
    `https://dog.ceo/api/breeds/list/all`,
    BreedResponseZ,
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
