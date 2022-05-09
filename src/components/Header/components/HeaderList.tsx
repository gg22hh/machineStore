import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { closeMenu } from "../../../store/slices/menu";

export const HeaderList = () => {
    const dispatch = useDispatch();
    return (
        <ul className="header__list">
            <li>
                <NavLink
                    onClick={() => dispatch(closeMenu())}
                    className="header__list-item"
                    to={"/"}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    onClick={() => dispatch(closeMenu())}
                    className="header__list-item"
                    to={"/products"}
                >
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink
                    onClick={() => dispatch(closeMenu())}
                    className="header__list-item"
                    to={"/artists"}
                >
                    Artists
                </NavLink>
            </li>
            <li>
                <NavLink
                    onClick={() => dispatch(closeMenu())}
                    className="header__list-item"
                    to={"/contacts"}
                >
                    Contact us
                </NavLink>
            </li>
            <li>
                <NavLink
                    onClick={() => dispatch(closeMenu())}
                    className="header__list-item"
                    to={"/about"}
                >
                    About
                </NavLink>
            </li>
        </ul>
    );
};
