import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import axios from "axios";
import { sellerConfig, digisellerRequest, xml2jsConfig } from "../../config";
import { CategoryDto } from "../../../../api/ICategory/CategoryDto";

const convert = require("xml-js");

const initialState: CategoryDto = {
    categoriesLoader: false,
    drawerOpen: false,
    selectedCategoryId: 0,
    categories: [],
};

const sliceCategories = createSlice({
    name: "categories",
    initialState,
    reducers: {
        toggleLoader: (state) => ({
            ...state,
            categoriesLoader: !state.categoriesLoader,
        }),
        setCategories: (state, action) => ({
            ...state,
            categories: action.payload,
        }),
        changeCategoryId: (state, action) => ({
            ...state,
            selectedCategoryId: action.payload,
        }),
    },
});

export const { reducer: categoriesReducer } = sliceCategories;

const {
    toggleLoader,
    setCategories,
    changeCategoryId,
} = sliceCategories.actions;


export function setCategoryId(value: number) {
    return async (dispatch: Dispatch) => {
        dispatch(changeCategoryId(value));
    };
}

export function getCategories() {
    return async (dispatch: Dispatch) => {
        dispatch(toggleLoader());
        const xmlBodyStr = `
      <digiseller.request>
        <seller>
          <id>${sellerConfig.id}</id>
        </seller>
        <category>
          <id>0</id>
        </category>
        <lang></lang>
      </digiseller.request>`;
        axios
            .post(digisellerRequest.shop_categories, xmlBodyStr)
            .then((response) => {
                const data = convert.xml2js(response.data, xml2jsConfig);
                if (data.hasOwnProperty("digiseller.response")) {
                    if (Number(data["digiseller.response"].retval["value"]) === 0) {
                        const category = data["digiseller.response"].categories.category;
                        if (category) {
                            dispatch(setCategories(category));
                            dispatch(toggleLoader());
                        }
                    } else {
                        console.log(`Ошибка при загрузке категорий!`);
                        console.log(data["digiseller.response"].retdesc["value"]);
                    }
                } else {
                    console.log(`Ошибка при загрузке категорий!`);
                    console.log(data["digiseller.response"]);
                }
            });
    };
}
