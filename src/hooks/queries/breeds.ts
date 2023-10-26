import { useQuery } from "@tanstack/react-query";
import { getBreedList } from "../../api/getBreeds";

export const breedsQueryKey = ["breeds"];

export const useBreeds = () =>
  useQuery({
    queryKey: breedsQueryKey,
    queryFn: ({ signal }) => getBreedList(signal),
  });
