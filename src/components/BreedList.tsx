import { useEffect, useState } from "react";
import { Breeds, getBreedList } from "../api/getBreeds";
import { SearchForm } from "./SearchForm";

interface BreedListProps {
  onSelectBreed: (breed: string) => void;
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
          <li onClick={() => onSelectBreed(breed)}>
            {breed} - {subBreeds.map((subBreed) => subBreed)}
          </li>
        ))}
      </ul>
    </div>
  );
}
