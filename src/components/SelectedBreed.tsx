import { useState } from "react";
import { BreedT } from "../types/BreedT";
import { DogImage } from "./DogImage";
import { RefreshButton } from "./RefreshButton";
import { ImageGallery } from "./ImageGallery";
import { imageContainer } from "./SelectedBreed.css";

interface SelectedBreedProps {
  selectedBreed: BreedT;
  onGetImageList: () => Promise<void>;
  onRefresh: VoidFunction;
}

export function SelectedBreed({
  selectedBreed,
  onGetImageList,
  onRefresh,
}: SelectedBreedProps) {
  const [showList, setShowList] = useState(false);

  const handleClick = () => {
    setShowList(true);
    onGetImageList();
  };

  return (
    <div className={imageContainer}>
      <h2>{selectedBreed.name}</h2>
      <RefreshButton onRefresh={onRefresh} />
      <button onClick={handleClick}>Get List</button>
      {showList ? (
        <ImageGallery images={selectedBreed.images} />
      ) : (
        <DogImage imgSrc={selectedBreed.images[0]} />
      )}
    </div>
  );
}
