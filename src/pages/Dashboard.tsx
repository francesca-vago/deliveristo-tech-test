import { useState } from "react";
import { BreedList } from "../components/BreedList";
import { SearchForm } from "../components/SearchForm";
import { getRandomDogByBreed } from "../api/getDogs";
import { BreedT } from "../types/BreedT";
import { SelectedBreed } from "../components/SelectedBreed";

export function Dashboard() {
  const [selectedBreed, setSelectedBreed] = useState<BreedT | null>(null);

  const handleSelectBreed = async (breedName: string) => {
    const breedImage = await getRandomDogByBreed(breedName);

    setSelectedBreed({
      name: breedName,
      image: breedImage,
    });
  };

  return (
    <main>
      <SearchForm />
      <div style={{ display: "flex" }}>
        <BreedList onSelectBreed={handleSelectBreed} />
        {selectedBreed && <SelectedBreed selectedBreed={selectedBreed} />}
      </div>
    </main>
  );
}
