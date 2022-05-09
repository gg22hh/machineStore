import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menu: false,
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setMenu: (state) => {
            state.menu = !state.menu;
        },
        closeMenu: (state) => {
            state.menu = false;
        },
    },
});

export const { setMenu, closeMenu } = menuSlice.actions;
export const menuReducer = menuSlice.reducer;
export const selectMenu = (state) => state.menu.menu;
