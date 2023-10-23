import { z } from "zod";
import { fetchDecode } from "./utils";

export const ResponseZ = z.object({
  status: z.string(),
  message: z.string(),
});

export type ResponseT = z.infer<typeof ResponseZ>;

export const getRandomDogByBreed = (query: string) =>
  fetchDecode(`https://dog.ceo/api/breed/${query}/images/random`, ResponseZ);
