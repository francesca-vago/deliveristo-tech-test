import { useState } from "react";
import { useBreeds } from "../queries/breeds";
import { foldQueryResult } from "../utils/query";
import { BreedList } from "./BreedList";
import { SearchForm } from "./SearchForm";

interface BreedListProps {
  onSelectBreed: (breed: string, subBreed?: string) => void;
}

export function BreedSearch({ onSelectBreed }: BreedListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const breeds = useBreeds();

  return (
    <div>
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
          />
        ),
        () => (
          <>Error</>
        )
      )}
    </div>
  );
}
