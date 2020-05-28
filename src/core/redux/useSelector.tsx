import {
  useSelector as useSelectorTyped,
  TypedUseSelectorHook
} from "react-redux";

import { RootState } from "./rootReducer";
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorTyped;
