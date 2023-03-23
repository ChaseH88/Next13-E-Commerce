import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "state";
import { setQuery } from "state/slices/search";

export const useSearchState = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.search);

  const setQueryAction = useCallback((query: string) => {
    dispatch(setQuery(query));
  }, []);

  return {
    state,
    actions: {
      setQueryAction,
    },
  };
};
