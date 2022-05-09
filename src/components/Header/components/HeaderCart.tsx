import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setMenu } from "../../../store/slices/menu";

export const HeaderCart = () => {
    const dispatch = useDispatch();
    return (
        <div className="header__cart">
            <div className="header__cart-num">1</div>
            <Link
                onClick={() => dispatch(setMenu())}
                className="header__cart-img"
                to={"/cart"}
            >
                <div />
            </Link>
        </div>
    );
};
