import React from "react";
import { NavLink } from "react-router-dom";

export const HeaderList = () => {
    return (
        <ul className="header__list">
            <li>
                <NavLink className="header__list-item" to={"/"}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className="header__list-item" to={"/products"}>
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink className="header__list-item" to={"/artists"}>
                    Artists
                </NavLink>
            </li>
            <li>
                <NavLink className="header__list-item" to={"/contacts"}>
                    Contact us
                </NavLink>
            </li>
            <li>
                <NavLink className="header__list-item" to={"/about"}>
                    About
                </NavLink>
            </li>
        </ul>
    );
};
