import { useEffect, useReducer } from "react";
import { fetchSkips } from "../api/skips.api";
import type { ISkip } from "../types";

type State = {
  skips: ISkip[];
  loading: boolean;
  error: string | null;
};

type Action =
  | { type: "LOAD_START" }
  | { type: "LOAD_SUCCESS"; payload: ISkip[] }
  | { type: "LOAD_ERROR"; payload: string };

const initialState: State = {
  skips: [],
  loading: true,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOAD_START":
      return { ...state, loading: true, error: null };
    case "LOAD_SUCCESS":
      return { skips: action.payload, loading: false, error: null };
    case "LOAD_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function useSkips() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const loadProducts = async () => {
      dispatch({ type: "LOAD_START" });
      try {
        const data = await fetchSkips();
        dispatch({ type: "LOAD_SUCCESS", payload: data });
      } catch {
        dispatch({ type: "LOAD_ERROR", payload: "Failed to load products." });
      }
    };

    loadProducts();
  }, []);

  return state;
}
export default useSkips;
