import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./slices/menu";

const reducer = {
    menu: menuReducer,
};

export const store = configureStore({
    reducer,
});
