import { UseQueryResult } from "@tanstack/react-query";

/**
 * A utility function to simplify the usage of the result of a useQuery
 * @param queryResult the result of a useQuery
 * @param onLoading what to do if the query is in a loading status
 * @param onSuccess what to do if the query is in a success status
 * @param onError what to do if the query is in a error status
 * @param fetchingIsLoading consider the `isFetching` status (if the query already succeeded but it's updating) the same as the loading status
 */
export const foldQueryResult = <T, R>(
  queryResult: UseQueryResult<T>,
  onLoading: () => R,
  onSuccess: (data: T) => R,
  onError: (error: Error) => R,
  fetchingIsLoading?: boolean
) => {
  if (fetchingIsLoading && queryResult.isFetching) {
    return onLoading();
  }

  switch (queryResult.status) {
    case "error":
      return onError(queryResult.error);
    case "success":
      return onSuccess(queryResult.data);
    case "pending":
      return onLoading();
  }
};
