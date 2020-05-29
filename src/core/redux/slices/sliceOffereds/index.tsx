import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";

const initialState = {
    loader: false,
    offereds: [],
};

const sliceOffereds = createSlice({
    name: "categories",
    initialState,
    reducers: {
        toggleLoader: (state) => ({
            ...state,
            categoriesLoader: !state.loader,
        }),
    },
});

export const { reducer: offeredsReducer } = sliceOffereds;

const {
    toggleLoader,
} = sliceOffereds.actions;

export function setCategoryId(value: number) {
    return async (dispatch: Dispatch,
        getState: Function,
        getFirebase: Function) => {
        dispatch(toggleLoader());
    };
}

