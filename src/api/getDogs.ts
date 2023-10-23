import { ResponseZ } from "./types";
import { fetchDecode } from "./utils";

export const getRandomDogByBreed = async (query: string) => {
  const response = await fetchDecode(
    `https://dog.ceo/api/breed/${query}/images/random`,
    ResponseZ
  );

  return response.message;
};
