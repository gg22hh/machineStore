import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Card.scss";

interface CardProps {
    name: string;
    image: string;
    price: number;
    isSold: boolean;
    id: number;
}

export const Card: FC<CardProps> = ({ name, price, image, isSold, id }) => {
    const location = useLocation().pathname;
    const navigation = useNavigate();
    return (
        <button
            onClick={() => navigation(`${location}/item${id}`)}
            className="card"
        >
            <img src={image} alt="card" />

            {isSold ? (
                <div className="card-sold">
                    <span>Sold out</span>
                </div>
            ) : (
                <div className="card-info">
                    <div className="card-name">{name}</div>
                    <div className="card-price">{`$${price} USD`}</div>
                    <div className="card-link">View product</div>
                </div>
            )}
        </button>
    );
};
