import { ChangeEventHandler, useId } from "react";
import { form, radio, radioLabel } from "./VisualizationMode.css";

export type VisualizationMode = "image" | "gallery";

interface VisualizationModeProps {
  onChangeVisualizationMode: (style: "image" | "gallery") => void;
  value: VisualizationMode;
}

export function VisualizationMode({
  onChangeVisualizationMode,
  value,
}: VisualizationModeProps) {
  const imageId = useId();
  const galleryId = useId();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      onChangeVisualizationMode(e.target.value as VisualizationMode);
    }
  };

  const renderRadio = (radioValue: VisualizationMode, id: string) => (
    <input
      id={id}
      type="radio"
      name="style"
      value={radioValue}
      checked={value === radioValue}
      onChange={handleChange}
      className={radio}
    />
  );

  return (
    <form className={form}>
      <div>
        {renderRadio("image", imageId)}
        <label htmlFor={imageId} className={radioLabel}>
          Image
        </label>
      </div>
      <div>
        {renderRadio("gallery", galleryId)}
        <label htmlFor={galleryId} className={radioLabel}>
          Gallery
        </label>
      </div>
    </form>
  );
}
