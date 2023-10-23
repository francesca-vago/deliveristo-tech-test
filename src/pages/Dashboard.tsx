import { useState } from "react";
import { BreedList } from "../components/BreedList";
import { SearchForm } from "../components/SearchForm";
import { getRandomDogByBreed } from "../api/getDogs";

export function Dashboard() {
  const [selectedBreed, setSelectedBreed] = useState<{
    name: string;
    image: string;
  } | null>(null);

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
        <h2>{selectedBreed?.name}</h2>
        <img src={selectedBreed?.image} />
      </div>
    </main>
  );
}
