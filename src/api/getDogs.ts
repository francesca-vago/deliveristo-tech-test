import { z } from "zod";
import { ResponseZ } from "./types";
import { fetchDecode } from "../utils/fetch";

const DogZ = z.string();
const DogResponseZ = ResponseZ(DogZ);

export const getRandomDogByBreed = async (
  breed: string,
  signal?: AbortSignal
) => {
  const response = await fetchDecode(
    `https://dog.ceo/api/breed/${breed}/images/random`,
    DogResponseZ,
    signal
  );

  return response.message;
};

export const getRandomDogBySubBreed = async (
  breed: string,
  subBreed: string,
  signal?: AbortSignal
) => {
  const response = await fetchDecode(
    `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`,
    DogResponseZ,
    signal
  );

  return response.message;
};

const DogListZ = z.array(z.string());
const DogListResponseZ = ResponseZ(DogListZ);

export const getDogListByBreed = async (
  breed: string,
  signal?: AbortSignal
) => {
  const response = await fetchDecode(
    `https://dog.ceo/api/breed/${breed}/images`,
    DogListResponseZ,
    signal
  );

  return response.message;
};

export const getDogListBySubBreed = async (
  breed: string,
  subBreed: string,
  signal?: AbortSignal
) => {
  const response = await fetchDecode(
    `https://dog.ceo/api/breed/${breed}/${subBreed}/images`,
    DogListResponseZ,
    signal
  );

  return response.message;
};
