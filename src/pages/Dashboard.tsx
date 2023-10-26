import { useState } from "react";
import { BreedSearch } from "../components/BreedSearch";
import { SelectedBreed } from "../components/SelectedBreed";
import { BreedT } from "../types/BreedT";
import { main } from "./Dashboard.css";
import { SplashScreen } from "../components/SplashScreen";
import { MobileHeader } from "../components/MobileHeader";

export function Dashboard() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState<BreedT | null>(null);

  const handleSelectBreed = (breed: string, subBreed?: string) => {
    setSearchOpen(false);
    setSelectedBreed({
      breed: breed,
      subBreed: subBreed ?? null,
    });
  };

  return (
    <main className={main}>
      <MobileHeader onClickSearch={() => setSearchOpen(true)} />
      <BreedSearch
        onSelectBreed={handleSelectBreed}
        selectedBreed={selectedBreed}
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
      {selectedBreed ? (
        <SelectedBreed breed={selectedBreed} />
      ) : (
        <SplashScreen />
      )}
    </main>
  );
}
