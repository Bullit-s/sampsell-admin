import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "@reduxjs/toolkit";
import { profileReducer } from './slices/sliceProfile'

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  profile: profileReducer,

});

export type RootState = ReturnType<typeof rootReducer>;
