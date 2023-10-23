import { useEffect, useState } from "react";
import { Breeds, getBreedList } from "../api/getBreeds";

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
    <ul>
      {breeds.map(({ breed, subBreeds }) => (
        <li onClick={() => onSelectBreed(breed)}>
          {breed} - {subBreeds.map((subBreed) => subBreed)}
        </li>
      ))}
    </ul>
  );
}
