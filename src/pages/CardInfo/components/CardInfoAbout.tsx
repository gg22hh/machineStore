import React, { FC } from "react";
import { Link } from "react-router-dom";

interface CardInfoAboutProps {
    name: string;
    price: string;
    text1: string;
    text2: string;
}

export const CardInfoAbout: FC<CardInfoAboutProps> = ({
    name,
    price,
    text1,
    text2,
}) => {
    return (
        <form className="cardInfo__about">
            <h1 className="cardInfo__about-title">{name}</h1>
            <div className="cardInfo__size">
                <h3 className="cardInfo__size-title">Select size</h3>
                <ul>
                    <li className="cardInfo__size-item active">S</li>
                    <li className="cardInfo__size-item">M</li>
                    <li className="cardInfo__size-item">L</li>
                    <li className="cardInfo__size-item">XL</li>
                    <li className="cardInfo__size-item">2XL</li>
                    <li className="cardInfo__size-item">3XL</li>
                </ul>
            </div>
            <div className="cardInfo__price">
                <div className="cardInfo__price-title">Price</div>
                <div>{price}</div>
            </div>
            <div className="cardInfo__purchase">
                <h3 className="cardInfo__purchase-title">
                    Quantity and purchase
                </h3>
                <div className="cardInfo__purchase-form">
                    <input
                        className="cardInfo__purchase-input"
                        placeholder="1"
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
