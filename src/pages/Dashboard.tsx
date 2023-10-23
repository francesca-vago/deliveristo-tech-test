import { useState } from "react";
import { BreedList } from "../components/BreedList";
import { SearchForm } from "../components/SearchForm";
import { getRandomDogByBreed } from "../api/getDogs";
import { BreedT } from "../types/BreedT";
import { SelectedBreed } from "../components/SelectedBreed";
import { RestoreButton } from "../components/RestoreButton";

export function Dashboard() {
  const [selectedBreed, setSelectedBreed] = useState<BreedT | null>(null);

  const handleSelectBreed = async (breedName: string) => {
    const breedImage = await getRandomDogByBreed(breedName);

    setSelectedBreed({
      name: breedName,
      image: breedImage,
    });
  };

  const handleRefreshBreedImage = async () => {
    if (selectedBreed) {
      const breedImage = await getRandomDogByBreed(selectedBreed.name);

      setSelectedBreed({
        name: selectedBreed.name,
        image: breedImage,
      });
    }
  };

  const handleRestoreBreedImage = async () => setSelectedBreed(null);

  return (
    <main>
      <RestoreButton onRestore={handleRestoreBreedImage} />
      <SearchForm />
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
