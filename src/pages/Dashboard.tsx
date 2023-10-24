import { useState } from "react";
import { BreedList } from "../components/BreedList";
import { getRandomDogByBreed, getRandomDogBySubBreed } from "../api/getDogs";
import { BreedT } from "../types/BreedT";
import { SelectedBreed } from "../components/SelectedBreed";
import { RestoreButton } from "../components/RestoreButton";

export function Dashboard() {
  const [selectedBreed, setSelectedBreed] = useState<BreedT | null>(null);

  const handleSelectBreed = async (breed: string, subBreed?: string) => {
    const getDogImage = () => {
      if (subBreed) {
        return getRandomDogBySubBreed(breed, subBreed);
      } else {
        return getRandomDogByBreed(breed);
      }
    };
    const dogImage = await getDogImage();

    setSelectedBreed({
      name: breed,
      subBreed: subBreed ?? null,
      image: dogImage,
    });
  };

  const handleRefreshBreedImage = async () => {
    if (selectedBreed) {
      const breedImage = await getRandomDogByBreed(selectedBreed.name);

      setSelectedBreed({
        name: selectedBreed.name,
        subBreed: selectedBreed.subBreed,
        image: breedImage,
      });
    }
  };

  const handleRestoreBreedImage = async () => setSelectedBreed(null);

  return (
    <main>
      <RestoreButton onRestore={handleRestoreBreedImage} />
      <div style={{ display: "flex" }}>
        <BreedList onSelectBreed={handleSelectBreed} />
        {selectedBreed && (
          <SelectedBreed
            selectedBreed={selectedBreed}
            onRefresh={handleRefreshBreedImage}
          />
        )}
      </div>
    </main>
  );
}
