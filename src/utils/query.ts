import { UseQueryResult } from "@tanstack/react-query";

export const foldQueryResult = <T, R>(
  queryResult: UseQueryResult<T>,
  onLoading: () => R,
  onSuccess: (data: T) => R,
  onError: (error: Error) => R
) => {
  switch (queryResult.status) {
    case "error":
      return onError(queryResult.error);
    case "success":
      return onSuccess(queryResult.data);
    case "pending":
      return onLoading();
  }
};
