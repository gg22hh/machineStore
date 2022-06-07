import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../../store/slices/cart";
import { ICartItem } from "../../../types";
import close from "../../../images/close.svg";

interface CartItemProps {
    cart: ICartItem;
    index: number;
    setCartTotalPrice: (num: number) => void;
    cartTotalPrice: number;
}

export const CartItem: FC<CartItemProps> = ({
    cart,
    index,
    setCartTotalPrice,
    cartTotalPrice,
}) => {
    const [amount, setAmount] = useState(cart.cartTotalPrice / cart.cartPrice);
    const [totalPrice, setTotalPrice] = useState(amount * cart.cartPrice);
    const dispatch = useDispatch();

    const minus = () => {
        if (amount > 1) {
            setAmount(amount - 1);
            setCartTotalPrice(cartTotalPrice - cart.cartPrice);
        }
    };

    const plus = () => {
        setAmount(amount + 1);
        setCartTotalPrice(cartTotalPrice + cart.cartPrice);
    };

    useEffect(() => {
        setTotalPrice(amount * cart.cartPrice);
    }, [amount]);
    return (
        <div className="cart__item">
            <div className="cart__item-content">
                <button
                    className="cart__item-button"
                    onClick={() => dispatch(deleteItemFromCart(index))}
                >
                    <img src={close} alt="delete" />
                </button>
                <div className="cart__item-info">
                    <div className="cart__item-image">
                        <img src={cart.cartImage} alt="cart item" />
                    </div>
                    <div className="cart__item-about">
                        <div className="cart__item-name">{cart.cartName}</div>
                        <div className="cart__item-size">{cart.cartSize}</div>
                        <div className="cart__item-cost">{`$${cart.cartPrice} USD`}</div>
                    </div>
                </div>
            </div>
            <div className="cart__item-price">
                <div className="cart__item-amount">
                    <button onClick={minus}>-</button>
                    <div>{amount}</div>
                    <button onClick={plus}>+</button>
                </div>
                <div>{`$${totalPrice} USD`}</div>
            </div>
        </div>
    );
};
