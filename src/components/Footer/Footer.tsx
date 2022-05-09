import React from "react";
import { footerInfo } from "../../shared/projectData";
import { FooterList } from "./components/FooterList";
import "./Footer.scss";

export const Footer = () => {
    const footerLinksList = footerInfo.map((links) => {
        return (
            <FooterList
                key={links.id}
                title={links.title}
                links={links.links}
                href={links.href}
            />
        );
    });

    return (
        <div className="footer">
            <div className="container">
                <div className="footer__top">{footerLinksList}</div>
                <div className="footer__bottom">
                    <p className="footer__bottom-text">
                        This site is protected by recaptcha and the google
                        privacy policy and terms of service apply
                    </p>
                    <p className="footer__bottom-text">
                        Copyright 5060 /machine 56
                    </p>
                    <p className="footer__bottom-text">All rights reserved</p>
                </div>
            </div>
        </div>
    );
};
