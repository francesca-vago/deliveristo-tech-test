import { BreedT } from "../types/BreedT";
import { formatBreed } from "../utils/string";
import { header } from "./PageHeader.css";
import { VisualizationMode } from "./VisualizationMode";

interface PageHeaderProps {
  breed: BreedT;
  onChangeVisualizationMode: (mode: VisualizationMode) => void;
  visualizationMode: VisualizationMode;
}

export function PageHeader({
  breed,
  onChangeVisualizationMode,
  visualizationMode,
}: PageHeaderProps) {
  return (
    <div className={header}>
      <h2>{formatBreed(breed)}</h2>
      <VisualizationMode
        value={visualizationMode}
        onChangeVisualizationMode={onChangeVisualizationMode}
      />
    </div>
  );
}
