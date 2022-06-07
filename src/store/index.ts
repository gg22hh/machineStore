import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cart";
import { menuReducer } from "./slices/menu";

const reducer = {
    menu: menuReducer,
    cart: cartReducer,
};

export const store = configureStore({
    reducer,
});
