import { z } from "zod";
import { fetchDecode } from "./utils";

export const BreedZ = z.record(z.array(z.string()));

export const ResponseZ = z.object({
  status: z.string(),
  message: BreedZ,
});

export type ResponseT = z.infer<typeof ResponseZ>;
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
