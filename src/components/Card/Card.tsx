import React, { FC } from "react";
import "./Card.scss";

interface CardProps {
    name: string;
    image: string;
    price: string;
    isSold: boolean;
}

export const Card: FC<CardProps> = ({ name, price, image, isSold }) => {
    return (
        <div className="card">
            <img src={image} alt="card" />

            {isSold ? (
                <div className="card-sold">
                    <span>Sold out</span>
                </div>
            ) : (
                <div className="card-info">
                    <div className="card-name">{name}</div>
                    <div className="card-price">{price}</div>
                    <div className="card-link">View product</div>
                </div>
            )}
        </div>
    );
};
