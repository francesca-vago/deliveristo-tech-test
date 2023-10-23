import { z } from "zod";
import { ResponseZ } from "./types";
import { fetchDecode } from "./utils";

const DogZ = z.string();
const DogResponseZ = ResponseZ(DogZ);

export const getRandomDogByBreed = async (query: string) => {
  const response = await fetchDecode(
    `https://dog.ceo/api/breed/${query}/images/random`,
    DogResponseZ
  );

  return response.message;
};

const DogListZ = z.array(z.string());
const DogListResponseZ = ResponseZ(DogListZ);

export const getDogListByBreed = async (query: string) => {
  const response = await fetchDecode(
    `https://dog.ceo/api/breed/${query}/images`,
    DogListResponseZ
  );

  return response.message;
};
