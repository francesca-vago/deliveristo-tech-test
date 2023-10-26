import { useState } from "react";
import { BreedT } from "../types/BreedT";
import { clsx } from "../utils/string";
import { DogImage } from "./DogImage";
import { ImageGallery } from "./ImageGallery";
import { PageHeader } from "./PageHeader";
import { fullHeightImageContainer, imageContainer } from "./SelectedBreed.css";
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
      <PageHeader
        breed={breed}
        onChangeVisualizationMode={setVisualizationMode}
        visualizationMode={visualizationMode}
      />
      {visualizationMode === "gallery" ? (
        <ImageGallery breed={breed} />
      ) : (
        <DogImage breed={breed} />
      )}
    </div>
  );
}
