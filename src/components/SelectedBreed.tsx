import { useState } from "react";
import { BreedT } from "../types/BreedT";
import { formatBreed } from "../utils/string";
import { DogImage } from "./DogImage";
import { ImageGallery } from "./ImageGallery";
import { imageContainer } from "./SelectedBreed.css";

interface SelectedBreedProps {
  breed: BreedT;
}

export function SelectedBreed({ breed }: SelectedBreedProps) {
  const [showList, setShowList] = useState(false);

  const handleClick = () => {
    setShowList(true);
  };

  return (
    <div className={imageContainer}>
      <h2>{formatBreed(breed)}</h2>
      <button onClick={handleClick}>Get List</button>
      {showList ? <ImageGallery breed={breed} /> : <DogImage breed={breed} />}
    </div>
  );
}
