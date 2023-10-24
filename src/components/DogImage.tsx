import { dogImage } from "./DogImage.css";

interface DogImageProps {
  imgSrc: string;
}

export function DogImage({ imgSrc }: DogImageProps) {
  return <img src={imgSrc} alt={`dog image`} className={dogImage} />;
}
