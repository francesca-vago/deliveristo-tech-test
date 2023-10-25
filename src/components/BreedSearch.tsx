import { useState } from "react";
import { useBreeds } from "../queries/breeds";
import { foldQueryResult } from "../utils/query";
import { BreedList } from "./BreedList";
import { SearchForm } from "./SearchForm";
import { breedSearchContainer } from "./BreedSearch.css";
import { BreedT } from "../types/BreedT";

interface BreedListProps {
  onSelectBreed: (breed: string, subBreed?: string) => void;
  selectedBreed: BreedT | null;
}

export function BreedSearch({ onSelectBreed, selectedBreed }: BreedListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const breeds = useBreeds();

  return (
    <div className={breedSearchContainer}>
      <SearchForm onSearchChange={setSearchQuery} />
      {foldQueryResult(
        breeds,
        () => (
          <>Loading...</>
        ),
        (breeds) => (
          <BreedList
            breeds={breeds}
            onSelectBreed={onSelectBreed}
            searchQuery={searchQuery}
            selectedBreed={selectedBreed}
          />
        ),
        () => (
          <>Error</>
        )
      )}
    </div>
  );
}
