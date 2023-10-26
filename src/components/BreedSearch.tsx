import { useState } from "react";
import Logo from "../assets/logo.png";
import { useBreeds } from "../hooks/queries/breeds";
import { BreedT } from "../types/BreedT";
import { BreedList } from "./BreedList";
import {
  breedSearchContainer,
  breedSearchHeader,
  logo,
  logoHeading,
} from "./BreedSearch.css";
import { SearchForm } from "./SearchForm";
import { ShowQueryResult } from "./ShowQueryResult";

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
        <h1 className={logoHeading}>
          <img
            src={Logo}
            alt="Woofr, Pawfect images of dogs logo"
            className={logo}
          />
        </h1>
        <SearchForm onSearchChange={setSearchQuery} />
      </div>
      <ShowQueryResult queryResult={breeds}>
        {(breeds) => (
          <BreedList
            breeds={breeds}
            onSelectBreed={onSelectBreed}
            searchQuery={searchQuery}
            selectedBreed={selectedBreed}
          />
        )}
      </ShowQueryResult>
    </div>
  );
}
