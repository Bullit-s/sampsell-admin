import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "@reduxjs/toolkit";
import { profileReducer } from './slices/sliceProfile'
import { offeredsReducer } from "./slices/sliceOffereds";

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  profile: profileReducer,
  offereds: offeredsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
