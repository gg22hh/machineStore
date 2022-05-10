import React, { FC } from "react";

export const AboutInfo: FC = () => {
    return (
        <div className="about__info">
            <p className="about__text">Welcome to our online store.</p>
            <p className="about__text">
                Started off as a vector artist, Machine56 sees the infinite
                possibilities in other aspects, ideas and medium that could be
                elaborated on in the future. Streetwear was profoundly a niche
                for Machine56 to apply his aesthetics on and functions well with
                the users.
            </p>
            <p className="about__text">
                All items and product in this store is produce in high quality
                material and produced on a very limited quantity. Most of the
                item will not be reprinted, when its gone, its gone forever.
                More product and more collab project will be added soon, since
                this store is still a work in progress mode.
            </p>
            <p className="about__text">
                To see more of our works and daily news updates, please visit
                our Instagram for daily updates and information.
            </p>
            <p className="about__text">
                For local customer (Indonesia), please directly shop at our
                official Tokopedia page.
            </p>
            <p className="about__text">Have a nice day!</p>
            <a
                className="about__link"
                target="_blank"
                rel="noreferrer"
                href="https://www.tokopedia.com/machine56/home"
            >
                https://www.tokopedia.com/machine56/home
            </a>
        </div>
    );
};
