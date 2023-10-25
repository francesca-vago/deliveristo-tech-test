import { useQueryClient } from "@tanstack/react-query";
import {
  randomDogImageQueryKey,
  useRandomDogImage,
} from "../queries/randomDogImage";
import { BreedT } from "../types/BreedT";
import { foldQueryResult } from "../utils/query";
import { formatBreed } from "../utils/string";
import { dogImage } from "./DogImage.css";
import { RefreshButton } from "./RefreshButton";
import { useEffect } from "react";

interface DogImageProps {
  breed: BreedT;
}

export function DogImage({ breed }: DogImageProps) {
  const randomDogImage = useRandomDogImage(breed);

  const queryClient = useQueryClient();

  useEffect(() => {
    return () => {
      queryClient.invalidateQueries({
        queryKey: randomDogImageQueryKey(breed),
      });
    };
  }, [breed, queryClient]);

  return (
    <>
      <RefreshButton onRefresh={randomDogImage.refetch} />
      {foldQueryResult(
        randomDogImage,
        () => (
          <>Loading</>
        ),
        (imageSrc) => (
          <img
            src={imageSrc}
            alt={`${formatBreed(breed)} image`}
            className={dogImage}
          />
        ),
        () => (
          <>Error</>
        ),
        true
      )}
    </>
  );
}
