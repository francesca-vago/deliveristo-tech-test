import { useState } from "react";
import { BreedT } from "../types/BreedT";
import { clsx, formatBreed } from "../utils/string";
import { DogImage } from "./DogImage";
import { ImageGallery } from "./ImageGallery";
import {
  fullHeightImageContainer,
  header,
  imageContainer,
} from "./SelectedBreed.css";
import { VisualizationMode } from "./VisualizationMode";

interface SelectedBreedProps {
  breed: BreedT;
}

export function SelectedBreed({ breed }: SelectedBreedProps) {
  const [visualizationMode, setVisualizationMode] =
    useState<VisualizationMode>("image");

  return (
    <div
      className={clsx(
        imageContainer,
        visualizationMode === "image" && fullHeightImageContainer
      )}
    >
      <div className={header}>
        <h2>{formatBreed(breed)}</h2>
        <VisualizationMode
          value={visualizationMode}
          onChangeVisualizationMode={setVisualizationMode}
        />
      </div>
      {visualizationMode === "gallery" ? (
        <ImageGallery breed={breed} />
      ) : (
        <DogImage breed={breed} />
      )}
    </div>
  );
}
