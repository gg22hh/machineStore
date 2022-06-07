import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addItemToCart } from "../../../store/slices/cart";

interface CardInfoAboutProps {
    name: string;
    price: number;
    text1: string;
    text2: string;
    image: string;
}

export const CardInfoAbout: FC<CardInfoAboutProps> = ({
    name,
    price,
    text1,
    text2,
    image,
}) => {
    const sizes = {
        S: false,
        M: false,
        L: false,
        XL: false,
        "2XL": false,
        "3XL": false,
    };
    const [size, setSize] = useState({ ...sizes, S: true });
    const [amount, setAmount] = useState("1");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/cart");
        let sizeOnCart = "";
        for (let i in size) {
            if (size[i]) sizeOnCart = i;
        }
        const onCart = {
            cartId: Math.random(),
            cartSize: sizeOnCart,
            cartTotalPrice: Number(amount) * price,
            cartPrice: price,
            cartName: name,
            cartImage: image,
        };
        dispatch(addItemToCart(onCart));
    };

    return (
        <form onSubmit={formSubmit} className="cardInfo__about">
            <h1 className="cardInfo__about-title">{name}</h1>
            <div className="cardInfo__size">
                <h3 className="cardInfo__size-title">Select size</h3>
                <ul>
                    <li
                        className={
                            size["S"]
                                ? "cardInfo__size-item active"
                                : "cardInfo__size-item"
                        }
                        onClick={() => setSize({ ...sizes, S: true })}
                    >
                        S
                    </li>
                    <li
                        className={
                            size["M"]
                                ? "cardInfo__size-item active"
                                : "cardInfo__size-item"
                        }
                        onClick={() => setSize({ ...sizes, M: true })}
                    >
                        M
                    </li>
                    <li
                        className={
                            size["L"]
                                ? "cardInfo__size-item active"
                                : "cardInfo__size-item"
                        }
                        onClick={() => setSize({ ...sizes, L: true })}
                    >
                        L
                    </li>
                    <li
                        className={
                            size["XL"]
                                ? "cardInfo__size-item active"
                                : "cardInfo__size-item"
                        }
                        onClick={() => setSize({ ...sizes, XL: true })}
                    >
                        XL
                    </li>
                    <li
                        className={
                            size["2XL"]
                                ? "cardInfo__size-item active"
                                : "cardInfo__size-item"
                        }
                        onClick={() => setSize({ ...sizes, "2XL": true })}
                    >
                        2XL
                    </li>
                    <li
                        className={
                            size["3XL"]
                                ? "cardInfo__size-item active"
                                : "cardInfo__size-item"
                        }
                        onClick={() => setSize({ ...sizes, "3XL": true })}
                    >
                        3XL
                    </li>
                </ul>
            </div>
            <div className="cardInfo__price">
                <div className="cardInfo__price-title">Price</div>
                <div>{`$${price} USD`}</div>
            </div>
            <div className="cardInfo__purchase">
                <h3 className="cardInfo__purchase-title">
                    Quantity and purchase
                </h3>
                <div className="cardInfo__purchase-form">
                    <input
                        className="cardInfo__purchase-input"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <button type="submit" className="cardInfo__purchase-button">
                        Add to cart
                    </button>
                </div>
            </div>
            <div className="cardInfo__about-text">
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
            <Link className="cardInfo__chart" to={"/about"}>
                Size chart
            </Link>
        </form>
    );
};
