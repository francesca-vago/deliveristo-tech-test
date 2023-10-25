import { useState } from "react";
import { useBreeds } from "../queries/breeds";
import { foldQueryResult } from "../utils/query";
import { BreedList } from "./BreedList";
import { SearchForm } from "./SearchForm";
import {
  breedSearchContainer,
  breedSearchHeader,
  logo,
} from "./BreedSearch.css";
import { BreedT } from "../types/BreedT";
import { Loader } from "./Loader";
import Logo from "../assets/logo.png";

interface BreedListProps {
  onSelectBreed: (breed: string, subBreed?: string) => void;
  selectedBreed: BreedT | null;
}

export function BreedSearch({ onSelectBreed, selectedBreed }: BreedListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const breeds = useBreeds();

  return (
    <div className={breedSearchContainer}>
      <div className={breedSearchHeader}>
        <img src={Logo} alt="logo" className={logo} />
        <SearchForm onSearchChange={setSearchQuery} />
      </div>
      {foldQueryResult(
        breeds,
        () => (
          <Loader />
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
