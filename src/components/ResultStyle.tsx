import { ChangeEventHandler, useId } from "react";
import { form, radio, radioLabel } from "./ResultStyle.css";

export type ResultStyle = "image" | "gallery";

interface SelectedBreedProps {
  onResultStyleChanged: (style: "image" | "gallery") => void;
  value: ResultStyle;
}

export function ResultStyle({
  onResultStyleChanged,
  value,
}: SelectedBreedProps) {
  const imageId = useId();
  const galleryId = useId();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      onResultStyleChanged(e.target.value as ResultStyle);
    }
  };

  const renderRadio = (radioValue: ResultStyle, id: string) => (
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
