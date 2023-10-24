import { DogImage } from "./DogImage";
import { gridContainer } from "./ImageGallery.css";

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <ul className={gridContainer}>
      {images.map((image) => (
        <DogImage imgSrc={image} key={image} />
      ))}
    </ul>
  );
}
