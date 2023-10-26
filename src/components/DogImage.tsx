import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import {
  randomDogImageQueryKey,
  useRandomDogImage,
} from "../hooks/queries/randomDogImage";
import { BreedT } from "../types/BreedT";
import { formatBreed } from "../utils/string";
import { dogImage, dogImageContainer } from "./DogImage.css";
import { RefreshButton } from "./RefreshButton";
import { ShowQueryResult } from "./ShowQueryResult";

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
      <ShowQueryResult queryResult={randomDogImage} fetchingIsLoading>
        {(imageSrc) => (
          <div className={dogImageContainer}>
            <img
              src={imageSrc}
              alt={`${formatBreed(breed)} image`}
              className={dogImage}
            />
          </div>
        )}
      </ShowQueryResult>
    </>
  );
}
