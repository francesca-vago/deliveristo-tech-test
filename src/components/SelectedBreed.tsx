import { BreedT } from "../types/BreedT";
import { DogImage } from "./DogImage";

interface SelectedBreedProps {
  selectedBreed: BreedT;
}

export function SelectedBreed({ selectedBreed }: SelectedBreedProps) {
  return (
    <div>
      <h2>{selectedBreed.name}</h2>
      <DogImage imgSrc={selectedBreed.image} />
    </div>
  );
}
