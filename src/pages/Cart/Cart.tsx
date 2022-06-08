import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/slices/cart";
import { ICartItem } from "../../types";
import "./Cart.scss";
import { CartItem } from "./components/CartItem";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export const Cart: FC = () => {
    const [cartTotalPrice, setCartTotalPrice] = useState<number>(0);
    const cart = useSelector(selectCart);
    const navigate = useNavigate();
    useEffect(() => {
        let total = 0;
        for (let i in cart) {
            total += cart[i].cartTotalPrice;
        }
        setCartTotalPrice(total);
    }, [cart]);
    const cartList = cart.map((cart: ICartItem, index: number) => {
        return (
            <CartItem
                cartTotalPrice={cartTotalPrice}
                setCartTotalPrice={setCartTotalPrice}
                key={index}
                cart={cart}
                index={index}
            />
        );
    });
    return (
        <div className="cart">
            <div className="container">
                {cart.length ? (
                    <div className="cart__list">{cartList}</div>
                ) : (
                    <div className="cart__empty">There is no items in cart</div>
                )}

                <div className="cart__buttons">
                    <div
                        onClick={() => navigate("/products")}
                        className="cart__back"
                    >
                        <Button>Continue shopping</Button>
                    </div>
                    <div className="cart__chekout">
                        <div className="cart__price">
                            <div>Subtotal</div>
                            <p>{`$${cartTotalPrice} USD`}</p>
                        </div>
                        <Button>Chekout</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
