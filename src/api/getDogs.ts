import { z } from "zod";
import { ResponseZ } from "./types";
import { fetchDecode } from "./utils";

const DogZ = z.string();
const DogResponseZ = ResponseZ(DogZ);

export const getRandomDogByBreed = async (breed: string) => {
  const response = await fetchDecode(
    `https://dog.ceo/api/breed/${breed}/images/random`,
    DogResponseZ
  );

  return response.message;
};

export const getRandomDogBySubBreed = async (
  breed: string,
  subBreed: string
) => {
  const response = await fetchDecode(
    `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`,
    DogResponseZ
  );

  return response.message;
};

const DogListZ = z.array(z.string());
const DogListResponseZ = ResponseZ(DogListZ);

export const getDogListByBreed = async (breed: string) => {
  const response = await fetchDecode(
    `https://dog.ceo/api/breed/${breed}/images`,
    DogListResponseZ
  );

  return response.message;
};

export const getDogListBySubBreed = async (breed: string, subBreed: string) => {
  const response = await fetchDecode(
    `https://dog.ceo/api/breed/${breed}/${subBreed}/images`,
    DogListResponseZ
  );

  return response.message;
};
