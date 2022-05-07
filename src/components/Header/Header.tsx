import React from "react";
import { Link } from "react-router-dom";
import { HeaderCart } from "./components/HeaderCart";
import { HeaderList } from "./components/HeaderList";
import "./Header.scss";

export const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <Link to={"/"} className="header__logo">
                        <div />
                    </Link>
                    <menu className="header__menu">
                        <HeaderList />
                        <HeaderCart />
                    </menu>
                </div>
            </div>
        </div>
    );
};
