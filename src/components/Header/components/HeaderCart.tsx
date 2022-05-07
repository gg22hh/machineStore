import React from "react";
import { Link } from "react-router-dom";

export const HeaderCart = () => {
    return (
        <div className="header__cart">
            <div className="header__cart-num">1</div>
            <Link className="header__cart-img" to={"/cart"}>
                <div />
            </Link>
        </div>
    );
};
