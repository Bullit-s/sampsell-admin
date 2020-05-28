import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { IProfileState } from "../../../../api/IProfile/ProfileDto";
import { showErrorNotify } from "../../../../common/components/helpers/errorHelper";
import { SuccesCode, showSuccesNotify } from "../../../../common/components/helpers/succesHelper";

const initialState: IProfileState = {
  profileLoader: false,
};

const sliceProfile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    toggleProfileLoader: (state, { payload }) => ({
      ...state,
      profileLoader: payload,
    }),
  },
});

export const { reducer: profileReducer } = sliceProfile;

const {
  toggleProfileLoader,
} = sliceProfile.actions;

export function AuthRequest(
  email: string,
  password: string
) {
  return async (
    dispatch: Dispatch,
    getState: Function,
    getFirebase: Function
  ) => {
    dispatch(toggleProfileLoader(true));
    const firebase = getFirebase();
    firebase
      .login({ email, password })
      .then(() => {
        dispatch(toggleProfileLoader(false));
         showSuccesNotify(SuccesCode.auth);
      })
      .catch((error: any) => {
        dispatch(toggleProfileLoader(false));
        showErrorNotify(error.code);
        console.log(error.message);
      });
  };
}

export function RegisterRequest(
  email: string,
  password: string
) {
  return async (
    dispatch: Dispatch,
    getState: Function,
    getFirebase: Function
  ) => {
    dispatch(toggleProfileLoader(true));
    const firebase = getFirebase();
    firebase
      .createUser({ email, password })
      .then(() => {
        dispatch(toggleProfileLoader(false));
        showSuccesNotify(SuccesCode.register);
      })
      .catch((error: any) => {
        dispatch(toggleProfileLoader(false));
        showErrorNotify(error.code);
        console.log(error.message);
      });  
  };
}

export function LogoutRequest() {
  return async (
    dispatch: Dispatch,
    getState: Function,
    getFirebase: Function
  ) => {
    const firebase = getFirebase();
    firebase.logout();
  };
}
export function ResetPasswordRequest(email: string) {
  return async (
    dispatch: Dispatch,
    getState: Function,
    getFirebase: Function
  ) => {
    dispatch(toggleProfileLoader(true));
    const firebase = getFirebase();
    firebase
      .resetPassword(email)
      .then(() => {
        firebase.logout();
        dispatch(toggleProfileLoader(false));
      })
      .catch((error: any) => {
        dispatch(toggleProfileLoader(false));
        showErrorNotify(error.code);
        console.log(error);
      });
  };
}

