import { useDogImagesList } from "../queries/dogImagesList";
import { BreedT } from "../types/BreedT";
import { foldQueryResult } from "../utils/query";
import { formatBreed } from "../utils/string";
import { dogImage, gridContainer } from "./ImageGallery.css";
import { Loader } from "./Loader";

interface ImageGalleryProps {
  breed: BreedT;
}

export function ImageGallery({ breed }: ImageGalleryProps) {
  const imagesList = useDogImagesList(breed);

  return foldQueryResult(
    imagesList,
    () => <Loader />,
    (images) => (
      <ul className={gridContainer}>
        {images.map((image) => (
          <li key={image}>
            <img
              src={image}
              alt={`${formatBreed(breed)} image`}
              className={dogImage}
            />
          </li>
        ))}
      </ul>
    ),
    () => <>Error</>
  );
}
