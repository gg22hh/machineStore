import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface FooterListProps {
    title: string;
    links: {
        name: string;
        link: string;
    }[];
    href?: boolean;
}

export const FooterList: FC<FooterListProps> = ({
    title,
    links,
    href = false,
}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth);
        });
    }, [screenWidth]);
    let footerClass = "";
    if (screenWidth < 525) {
        if (show) {
            footerClass = "footer__list adaptive active";
        } else {
            footerClass = "footer__list adaptive";
        }
    } else {
        footerClass = "footer__list";
    }

    const linksList = links.map((link) => {
        if (href) {
            return (
                <a key={link.name} href={link.link}>
                    {link.name}
                </a>
            );
        } else {
            return (
                <Link key={link.name} to={link.link}>
                    {link.name}
                </Link>
            );
        }
    });

    return (
        <div className={footerClass}>
            <h4 onClick={() => setShow(!show)} className="footer__list-title">
                {title}
            </h4>
            <p>{linksList}</p>
        </div>
    );
};
