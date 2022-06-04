import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface CardInfoDataProps {
    cardInfoMini1: string;
    cardInfoMini2: string;
    cardInfoMini3: string;
}

export const CardInfoData: FC<CardInfoDataProps> = ({
    cardInfoMini1,
    cardInfoMini2,
    cardInfoMini3,
}) => {
    const navigate = useNavigate();
    return (
        <div className="cardInfo__data">
            <button
                onClick={() => navigate(-1)}
                className="cardInfo__data-back"
            >
                Back
            </button>
            <div className="cardInfo__data-text">
                <p>
                    All products are sold “as is”. You assume the responsibility
                    for your purchase, and no refunds will be issued. You may
                    contact us within 2 hours from the purchase date if you wish
                    to exchange your purchase for a product of equal or lesser
                    value. If you choose to exchange you purchase for an item of
                    lesser value, there will be no refund for the difference in
                    price.
                </p>
                <p>
                    Any order placed in our website can be cancelled within 2
                    hours after placing the order.
                </p>
            </div>
            <h2 className="cardInfo__data-title">
                Special price for IDN Customer Only
            </h2>
            <div className="cardInfo__data-text">
                Get lower currency for all item only for Indonesian customer. We
                accept Mandiri or BCA account
            </div>

            <div className="cardInfo__data-images">
                <img
                    src={cardInfoMini1}
                    alt="cardInfo"
                    className="cardInfo__data-image"
                />
                <img
                    src={cardInfoMini2}
                    alt="cardInfo"
                    className="cardInfo__data-image"
                />
                <img
                    src={cardInfoMini3}
                    alt="cardInfo"
                    className="cardInfo__data-image"
                />
            </div>
        </div>
    );
};
