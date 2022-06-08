import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
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
