import { useState } from "react";
import { Breeds } from "../api/getBreeds";
import { SearchForm } from "./SearchForm";
import {
  breedButton,
  breedList,
  subBreedList,
  toggleSubBreedsButton,
} from "./BreedList.css";

interface BreedListProps {
  onSelectBreed: (breed: string, subBreed?: string) => void;
  breeds: Breeds;
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
      {breed}
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

export function BreedList({ onSelectBreed, breeds }: BreedListProps) {
  return (
    <div>
      <SearchForm />
      <ul className={breedList}>
        {breeds.map(({ breed, subBreeds }) => (
          <BreedItem
            key={breed}
            breed={breed}
            subBreeds={subBreeds}
            onClick={onSelectBreed}
          />
        ))}
      </ul>
    </div>
  );
}
