import { useState } from "react";
import Logo from "../assets/logo.png";
import CloseIcon from "../assets/close.svg";
import { useBreeds } from "../hooks/queries/breeds";
import { BreedT } from "../types/BreedT";
import { BreedList } from "./BreedList";
import {
  breedSearchContainer,
  breedSearchContainerOpen,
  breedSearchHeader,
  closeButton,
  logo,
  logoHeading,
} from "./BreedSearch.css";
import { SearchForm } from "./SearchForm";
import { ShowQueryResult } from "./ShowQueryResult";
import { clsx } from "../utils/string";

interface BreedListProps {
  onSelectBreed: (breed: string, subBreed?: string) => void;
  selectedBreed: BreedT | null;
  open?: boolean;
  onClose: () => void;
}

export function BreedSearch({
  onSelectBreed,
  selectedBreed,
  open,
  onClose,
}: BreedListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const breeds = useBreeds();

  return (
    <div
      className={clsx(breedSearchContainer, open && breedSearchContainerOpen)}
    >
      <div className={breedSearchHeader}>
        <h1 className={logoHeading}>
          <img
            src={Logo}
            alt="Woofr, Pawfect images of dogs logo"
            className={logo}
          />
        </h1>
        <button
          title="close search"
          type="button"
          onClick={onClose}
          className={closeButton}
        >
          <img src={CloseIcon} alt="" />
        </button>
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
