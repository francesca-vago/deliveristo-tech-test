import { BreedT } from "../types/BreedT";
import { DogImage } from "./DogImage";
import { RefreshButton } from "./RefreshButton";

interface SelectedBreedProps {
  selectedBreed: BreedT;
  onRefresh: VoidFunction;
}

export function SelectedBreed({
  selectedBreed,
  onRefresh,
}: SelectedBreedProps) {
  return (
    <div>
      <h2>{selectedBreed.name}</h2>
      <RefreshButton onRefresh={onRefresh} />
      <DogImage imgSrc={selectedBreed.image} />
    </div>
  );
}
