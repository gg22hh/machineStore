import React, { FC } from "react";

interface PointProps {
    text: string;
    link1: string;
    link2?: string;
}

export const Point: FC<PointProps> = ({ text, link1, link2 = "" }) => {
    return (
        <li className="home__points-item">
            <span>{text}</span>
            <p>
                <a href="/">{link1}</a>
                {link2 && <a href="/">{link2}</a>}
            </p>
        </li>
    );
};
