import React, { FC } from "react";
import { aboutItem } from "../../shared/projectData";
import "./About.scss";
import { AboutInfo } from "./components/AboutInfo";
import { AboutItem } from "./components/AboutItem";

export const About: FC = () => {
    const aboutList = aboutItem.map((item) => {
        return (
            <AboutItem
                key={item.id}
                image={item.image}
                types={item.types}
                size={item.size}
            />
        );
    });

    return (
        <div className="about">
            <div className="container">
                <AboutInfo />
                <div className="about__list">{aboutList}</div>
            </div>
        </div>
    );
};
