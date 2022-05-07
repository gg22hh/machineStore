import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderCart } from "./components/HeaderCart";
import { HeaderList } from "./components/HeaderList";
import "./Header.scss";

export const Header: FC = () => {
    const [menu, setMenu] = useState<boolean>(false);

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
                        onClick={() => setMenu(!menu)}
                        className={
                            menu ? "header__burger active" : "header__burger"
                        }
                    >
                        <span></span>
                    </button>
                </div>
                {menu && (
                    <div
                        onClick={() => setMenu(false)}
                        className="header__overlay"
                    ></div>
                )}
            </div>
        </div>
    );
};
