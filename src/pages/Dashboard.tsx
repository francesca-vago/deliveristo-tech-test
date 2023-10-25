import { useState } from "react";
import { BreedSearch } from "../components/BreedSearch";
import { SelectedBreed } from "../components/SelectedBreed";
import { BreedT } from "../types/BreedT";
import { main } from "./Dashboard.css";

export function Dashboard() {
  const [selectedBreed, setSelectedBreed] = useState<BreedT | null>(null);

  const handleSelectBreed = (breed: string, subBreed?: string) => {
    setSelectedBreed({
      breed: breed,
      subBreed: subBreed ?? null,
    });
  };

  return (
    <main className={main}>
      <BreedSearch
        onSelectBreed={handleSelectBreed}
        selectedBreed={selectedBreed}
      />
      {selectedBreed && <SelectedBreed breed={selectedBreed} />}
    </main>
  );
}
