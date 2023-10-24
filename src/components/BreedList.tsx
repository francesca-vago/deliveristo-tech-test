import { useEffect, useState } from "react";
import { Breeds, getBreedList } from "../api/getBreeds";
import { SearchForm } from "./SearchForm";

interface BreedListProps {
  onSelectBreed: (breed: string) => void;
}

interface BreedItemProps {
  breed: string;
  subBreeds: string[];
  onClick: (breed: string) => void;
}

function BreedItem({ breed, subBreeds, onClick }: BreedItemProps) {
  const [showSubBreeds, setShowSubBreeds] = useState(false);

  return (
    <>
      <li>
        <p onClick={() => onClick(breed)}>{breed}</p>
        {subBreeds.length ? (
          <button onClick={() => setShowSubBreeds(true)}>Open</button>
        ) : null}
      </li>
      {showSubBreeds && (
        <ul>
          {subBreeds.map((sub) => (
            <li onClick={() => onClick(sub)}>{sub}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export function BreedList({ onSelectBreed }: BreedListProps) {
  const [breeds, setBreeds] = useState<Breeds>([]);

  useEffect(() => {
    const abortController = new AbortController();
    getBreedList(abortController.signal)
      .then((breeds) => setBreeds(breeds))
      .catch((error) => console.log(error));

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <SearchForm />
      <ul style={{ listStyle: "none", textAlign: "left" }}>
        {breeds.map(({ breed, subBreeds }) => (
          <BreedItem
            breed={breed}
            subBreeds={subBreeds}
            onClick={onSelectBreed}
          />
        ))}
      </ul>
    </div>
  );
}
