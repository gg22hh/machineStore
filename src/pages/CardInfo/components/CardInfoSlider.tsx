import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import mainCard from "../../../images/cards/cardInfoMain.png";

export const CardInfoSlider: FC = () => {
    const pagination = {
        el: ".cardInfo__pagination",
        bulletClass: "cardInfo__pagination-bullet",
        bulletActiveClass: "cardInfo__pagination-bulletActive",
    };
    return (
        <div className="cardInfo__slider">
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={pagination}
                navigation
                onSlideChange={() => console.log("slide change")}
            >
                <SwiperSlide>
                    <img
                        className="cardInfo__slider-item"
                        src={mainCard}
                        alt="card main"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="cardInfo__slider-item"
                        src={mainCard}
                        alt="card main"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="cardInfo__slider-item"
                        src={mainCard}
                        alt="card main"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="cardInfo__slider-item"
                        src={mainCard}
                        alt="card main"
                    />
                </SwiperSlide>
                <div className="cardInfo__pagination"></div>
            </Swiper>
        </div>
    );
};
