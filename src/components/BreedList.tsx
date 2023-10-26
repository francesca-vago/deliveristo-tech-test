import { useState } from "react";
import { Breeds } from "../api/getBreeds";
import { clsx, upperCaseWords } from "../utils/string";
import {
  breedButton,
  breedList,
  selectedBreedButton,
  subBreedList,
  toggleSubBreedsButton,
} from "./BreedList.css";
import { useFilteredBreeds } from "../hooks/useFilteredBreeds";
import { BreedT } from "../types/BreedT";

interface BreedListProps {
  onSelectBreed: (breed: string, subBreed?: string) => void;
  breeds: Breeds;
  searchQuery?: string;
  selectedBreed: BreedT | null;
}

interface BreedItemProps {
  breed: string;
  subBreeds: string[];
  onClick: (breed: string, subBreed?: string) => void;
  selectedBreed: BreedT | null;
}

function BreedItem({
  breed,
  subBreeds,
  onClick,
  selectedBreed,
}: BreedItemProps) {
  const [showSubBreeds, setShowSubBreeds] = useState(false);

  const checkSelectedSubBreed = (breed: BreedT) =>
    breed.breed === selectedBreed?.breed &&
    breed.subBreed === selectedBreed.subBreed;

  const checkSelectedBreed = (breed: BreedT) =>
    breed.breed === selectedBreed?.breed;

  const renderBreedButton = (
    breed: string,
    onClick: () => void,
    parent?: string
  ) => (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        breedButton,
        (parent
          ? checkSelectedSubBreed({
              breed: parent ?? breed,
              subBreed: parent ? breed : null,
            })
          : checkSelectedBreed({ breed, subBreed: null })) &&
          selectedBreedButton
      )}
    >
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
              {renderBreedButton(sub, () => onClick(breed, sub), breed)}
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
  selectedBreed,
  searchQuery,
}: BreedListProps) {
  const filteredBreeds = useFilteredBreeds(breeds, searchQuery);

  return (
    <ul className={breedList} data-testid="gallery">
      {filteredBreeds.map(({ breed, subBreeds }) => (
        <BreedItem
          key={breed}
          breed={breed}
          subBreeds={subBreeds}
          onClick={onSelectBreed}
          selectedBreed={selectedBreed}
        />
      ))}
    </ul>
  );
}
