import React, { FC } from "react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/navigation";
import "./CardInfo.scss";
import { CardInfoData } from "./components/CardInfoData";
import { CardInfoSlider } from "./components/CardInfoSlider";
import { CardInfoAbout } from "./components/CardInfoAbout";

interface CardInfoProps {
    name: string;
    price: number;
    cardInfoMini1: string;
    cardInfoMini2: string;
    cardInfoMini3: string;
    text1: string;
    text2: string;
    image: string;
}

export const CardInfo: FC<CardInfoProps> = ({
    name,
    price,
    text1,
    text2,
    image,
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
                    <CardInfoAbout
                        name={name}
                        price={price}
                        text1={text1}
                        text2={text2}
                        image={image}
                    />
                </div>
            </div>
        </div>
    );
};
