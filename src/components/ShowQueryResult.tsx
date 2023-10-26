import { UseQueryResult } from "@tanstack/react-query";
import { foldQueryResult } from "../utils/query";
import { Loader } from "./Loader";
import { Error } from "./Error";

interface ShowQueryResultProps<T> {
  queryResult: UseQueryResult<T, Error>;
  children: (data: T) => JSX.Element;
  fetchingIsLoading?: boolean;
}

export function ShowQueryResult<T>({
  queryResult,
  children,
  fetchingIsLoading = false,
}: ShowQueryResultProps<T>) {
  return foldQueryResult(
    queryResult,
    () => <Loader />,
    children,
    () => <Error retry={queryResult.refetch} />,
    fetchingIsLoading
  );
}
