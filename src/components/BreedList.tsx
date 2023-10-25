import { useState } from "react";
import { Breeds } from "../api/getBreeds";
import { upperCaseWords } from "../utils/string";
import {
  breedButton,
  breedList,
  subBreedList,
  toggleSubBreedsButton,
} from "./BreedList.css";
import { useFilteredBreeds } from "../hooks/useFilteredBreeds";

interface BreedListProps {
  onSelectBreed: (breed: string, subBreed?: string) => void;
  breeds: Breeds;
  searchQuery?: string;
}

interface BreedItemProps {
  breed: string;
  subBreeds: string[];
  onClick: (breed: string, subBreed?: string) => void;
}

function BreedItem({ breed, subBreeds, onClick }: BreedItemProps) {
  const [showSubBreeds, setShowSubBreeds] = useState(false);

  const renderBreedButton = (breed: string, onClick: () => void) => (
    <button type="button" onClick={onClick} className={breedButton}>
      {upperCaseWords(breed)}
    </button>
  );

  return (
    <>
      <li>
        {Boolean(subBreeds.length) && (
          <button
            type="button"
            onClick={() => setShowSubBreeds(!showSubBreeds)}
            title={showSubBreeds ? "Close" : "Open"}
            aria-label={showSubBreeds ? "Close" : "Open"}
            className={toggleSubBreedsButton}
          >
            {showSubBreeds ? "▼" : "►"}
          </button>
        )}
        {renderBreedButton(breed, () => onClick(breed))}
      </li>
      {showSubBreeds && (
        <ul className={subBreedList}>
          {subBreeds.map((sub) => (
            <li key={sub}>
              {renderBreedButton(sub, () => onClick(breed, sub))}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export function BreedList({
  onSelectBreed,
  breeds,
  searchQuery,
}: BreedListProps) {
  const filteredBreeds = useFilteredBreeds(breeds, searchQuery);

  return (
    <ul className={breedList}>
      {filteredBreeds.map(({ breed, subBreeds }) => (
        <BreedItem
          key={breed}
          breed={breed}
          subBreeds={subBreeds}
          onClick={onSelectBreed}
        />
      ))}
    </ul>
  );
}
