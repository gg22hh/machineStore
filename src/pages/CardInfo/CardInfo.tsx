import React, { FC } from "react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/navigation";
import "./CardInfo.scss";
import { CardInfoData } from "./components/CardInfoData";
import { CardInfoSlider } from "./components/CardInfoSlider";
import { Link } from "react-router-dom";

interface CardInfoProps {
    name: string;
    price: string;
    cardInfoMini1: string;
    cardInfoMini2: string;
    cardInfoMini3: string;
    text1;
    text2;
}

export const CardInfo: FC<CardInfoProps> = ({
    name,
    price,
    text1,
    text2,
    cardInfoMini1,
    cardInfoMini2,
    cardInfoMini3,
}) => {
    return (
        <div className="cardInfo">
            <div className="container">
                <div className="cardInfo__inner">
                    <CardInfoData
                        cardInfoMini1={cardInfoMini1}
                        cardInfoMini2={cardInfoMini2}
                        cardInfoMini3={cardInfoMini3}
                    />
                    <CardInfoSlider />
                    <form className="cardInfo__about">
                        <h1 className="cardInfo__about-title">{name}</h1>
                        <div className="cardInfo__size">
                            <h3 className="cardInfo__size-title">
                                Select size
                            </h3>
                            <ul>
                                <li className="cardInfo__size-item active">
                                    S
                                </li>
                                <li className="cardInfo__size-item">M</li>
                                <li className="cardInfo__size-item">L</li>
                                <li className="cardInfo__size-item active">
                                    XL
                                </li>
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
                                <button
                                    type="submit"
                                    className="cardInfo__purchase-button"
                                >
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
                </div>
            </div>
        </div>
    );
};
