import React from "react";
import "./Home.scss";
import banner from "../../images/home/home-banner.svg";
import { Point } from "./components/Point";
import { points } from "../../shared/projectData";

export default function Home() {
    const pointsList = points.map((point) => {
        return (
            <Point
                key={point.id}
                text={point.text}
                link1={point.link1}
                link2={point.link2}
            />
        );
    });

    return (
        <div className="home">
            <div className="container">
                <div className="home__banner">
                    <img
                        className="home__banner-img"
                        src={banner}
                        alt="home banner"
                    />
                    <h3 className="home__uptitle">In node and path we trace</h3>
                    <h1 className="home__title">In vector we trust</h1>
                </div>
            </div>
            <div className="home__footer">
                <div className="container">
                    <ul className="home__points">{pointsList}</ul>
                </div>
            </div>
        </div>
    );
}
