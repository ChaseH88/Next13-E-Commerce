import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "state";

export const useSearchState = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.search);

  const searchDispatch = useMemo(
    () => ({
      setQuery: (query: string) => {
        dispatch({ type: "search/setQuery", payload: query });
      },
    }),
    [dispatch]
  );

  return {
    state,
    dispatch: searchDispatch,
  };
};
