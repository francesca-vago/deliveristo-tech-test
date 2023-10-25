import { useState } from "react";
import { Breeds } from "../api/getBreeds";
import { SearchForm } from "./SearchForm";

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
    <button type="button" onClick={onClick}>
      {breed}
    </button>
  );

  return (
    <>
      <li>
        {renderBreedButton(breed, () => onClick(breed))}
        {Boolean(subBreeds.length) && (
          <button
            type="button"
            onClick={() => setShowSubBreeds(!showSubBreeds)}
          >
            {showSubBreeds ? "Close" : "Open"}
          </button>
        )}
      </li>
      {showSubBreeds && (
        <ul>
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
      <ul style={{ listStyle: "none", textAlign: "left" }}>
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
