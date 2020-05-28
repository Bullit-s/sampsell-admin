import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { IProfileState } from "../../../../api/IProfile/ProfileDto";

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
          })
          .catch((error: any) => {
            dispatch(toggleProfileLoader(false));
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
            })
            .catch((error: any) => {
              console.log(error.message);
              dispatch(toggleProfileLoader(false));
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
              console.log(error);
              dispatch(toggleProfileLoader(false));
            });
  };
}

