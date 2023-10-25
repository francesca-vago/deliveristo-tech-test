import { useState } from "react";
import { BreedT } from "../types/BreedT";
import { formatBreed } from "../utils/string";
import { DogImage } from "./DogImage";
import { ImageGallery } from "./ImageGallery";
import { imageContainer } from "./SelectedBreed.css";
import { ResultStyle } from "./ResultStyle";

interface SelectedBreedProps {
  breed: BreedT;
}

export function SelectedBreed({ breed }: SelectedBreedProps) {
  const [resultStyle, setResultStyle] = useState<ResultStyle>("image");

  return (
    <div className={imageContainer}>
      <h2>{formatBreed(breed)}</h2>
      <ResultStyle value={resultStyle} onResultStyleChanged={setResultStyle} />
      {resultStyle === "gallery" ? (
        <ImageGallery breed={breed} />
      ) : (
        <DogImage breed={breed} />
      )}
    </div>
  );
}
