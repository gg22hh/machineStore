import card1 from "../../images/cards/card1.png";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    cart: [
        {
            cartId: 0.606636507063254,
            cartImage: card1,
            cartName: "MS-BOMBER D3",
            cartPrice: 135,
            cartSize: "S",
            cartTotalPrice: 135,
        },
    ],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        deleteItemFromCart: (state, action: PayloadAction<number>) => {
            const updatedCart = { ...state.cart[action.payload] };
            console.log(updatedCart);
            state.cart = state.cart.filter(
                (item) => item.cartId !== updatedCart.cartId
            );
        },
    },
});

export const { addItemToCart, deleteItemFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export const selectCart = (state) => state.cart.cart;
