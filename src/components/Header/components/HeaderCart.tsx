import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCart } from "../../../store/slices/cart";

export const HeaderCart = () => {
    const cart = useSelector(selectCart);
    return (
        <div className="header__cart">
            <div className="header__cart-num">
                {cart.length === 0 ? null : cart.length}
            </div>
            <Link className="header__cart-img" to={"/cart"}>
                <div />
            </Link>
        </div>
    );
};
