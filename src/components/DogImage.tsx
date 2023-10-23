interface DogImageProps {
  imgSrc: string;
}

export function DogImage({ imgSrc }: DogImageProps) {
  return <img src={imgSrc} />;
}
