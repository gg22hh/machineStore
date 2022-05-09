import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectMenu, setMenu } from "../../store/slices/menu";
import { HeaderCart } from "./components/HeaderCart";
import { HeaderList } from "./components/HeaderList";
import "./Header.scss";

export const Header: FC = () => {
    const dispatch = useDispatch();
    const menu = useSelector(selectMenu);

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <Link to={"/"} className="header__logo">
                        <div />
                    </Link>
                    <menu
                        className={
                            menu ? "header__menu active" : "header__menu"
                        }
                    >
                        <HeaderList />
                        <HeaderCart />
                    </menu>
                    <button
                        onClick={() => dispatch(setMenu())}
                        className={
                            menu ? "header__burger active" : "header__burger"
                        }
                    >
                        <span></span>
                    </button>
                </div>
                {menu && (
                    <div
                        onClick={() => dispatch(setMenu())}
                        className="header__overlay"
                    ></div>
                )}
            </div>
        </div>
    );
};
