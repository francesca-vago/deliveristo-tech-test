import { useEffect, useState } from "react";
import { BreedList } from "../components/BreedList";
import {
  getDogListByBreed,
  getDogListBySubBreed,
  getRandomDogByBreed,
  getRandomDogBySubBreed,
} from "../api/getDogs";
import { BreedT } from "../types/BreedT";
import { SelectedBreed } from "../components/SelectedBreed";
import { RestoreButton } from "../components/RestoreButton";
import { Breeds, getBreedList } from "../api/getBreeds";

export function Dashboard() {
  const [selectedBreed, setSelectedBreed] = useState<BreedT | null>(null);

  const getDogImage = (breed: string, subBreed: string | null) => {
    if (subBreed) {
      return getRandomDogBySubBreed(breed, subBreed);
    } else {
      return getRandomDogByBreed(breed);
    }
  };

  const getImageList = (breed: string, subBreed: string | null) => {
    if (subBreed) {
      return getDogListBySubBreed(breed, subBreed);
    } else {
      return getDogListByBreed(breed);
    }
  };

  const handleSelectBreed = (
    breed: string,
    dogImages: string[],
    subBreed?: string
  ) => {
    setSelectedBreed({
      name: breed,
      subBreed: subBreed ?? null,
      images: dogImages,
    });
  };

  const handleGetDogImage = async (breed: string, subBreed?: string) => {
    const dogImage = await getDogImage(breed, null);
    handleSelectBreed(breed, [dogImage], subBreed ?? undefined);
  };

  const handleRefreshBreedImage = async () => {
    // if (selectedBreed) {
    //   const breedImage = await getDogImage(
    //     selectedBreed.name,
    //     selectedBreed.subBreed
    //   );
    //   handleSelectBreed(
    //     selectedBreed.name,
    //     breedImage,
    //     selectedBreed?.subBreed
    //   );
    // }
  };

  const handleGetImageList = async () => {
    if (selectedBreed) {
      const dogImages = await getImageList(
        selectedBreed.name,
        selectedBreed?.subBreed ?? null
      );
      handleSelectBreed(
        selectedBreed.name,
        dogImages,
        selectedBreed?.subBreed ?? undefined
      );
    }
  };

  const handleRestoreBreedImage = async () => setSelectedBreed(null);

  const [breeds, setBreeds] = useState<Breeds>([]);

  useEffect(() => {
    const abortController = new AbortController();
    getBreedList(abortController.signal)
      .then((breeds) => setBreeds(breeds))
      .catch((error) => console.log(error));

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <main>
      <RestoreButton onRestore={handleRestoreBreedImage} />
      <div style={{ display: "flex" }}>
        <BreedList onSelectBreed={handleGetDogImage} breeds={breeds} />
        {selectedBreed && (
          <SelectedBreed
            selectedBreed={selectedBreed}
            onGetImageList={handleGetImageList}
            onRefresh={handleRefreshBreedImage}
          />
        )}
      </div>
    </main>
  );
}
