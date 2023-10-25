import { useRandomDogImage } from "../queries/randomDogImage";
import { BreedT } from "../types/BreedT";
import { foldQueryResult } from "../utils/query";
import { formatBreed } from "../utils/string";
import { dogImage } from "./DogImage.css";
import { RefreshButton } from "./RefreshButton";

interface DogImageProps {
  breed: BreedT;
}

export function DogImage({ breed }: DogImageProps) {
  const randomDogImage = useRandomDogImage(breed);

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
        )
      )}
    </>
  );
}
