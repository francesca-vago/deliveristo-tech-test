import { useState } from "react";
import { BreedSearch } from "../components/BreedSearch";
import { SelectedBreed } from "../components/SelectedBreed";
import { BreedT } from "../types/BreedT";

export function Dashboard() {
  const [selectedBreed, setSelectedBreed] = useState<BreedT | null>(null);

  const handleSelectBreed = (breed: string, subBreed?: string) => {
    setSelectedBreed({
      breed: breed,
      subBreed: subBreed ?? null,
    });
  };

  return (
    <main>
      <div style={{ display: "flex" }}>
        <BreedSearch onSelectBreed={handleSelectBreed} />
        {selectedBreed && <SelectedBreed breed={selectedBreed} />}
      </div>
    </main>
  );
}
