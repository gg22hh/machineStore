import React, { FC } from "react";
import "./NoMatch.scss";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

export const NoMatch: FC = () => {
    const navigate = useNavigate();

    return (
        <div className="noMatch">
            <div className="noMatch__title">
                404. <p> Page not found</p>
            </div>
            <div className="noMatch__text">
                Perhaps it has been moved, or you simply entered the wrong page
                address.
            </div>
            <button onClick={() => navigate(-1)} className="noMatch__button">
                Back
            </button>
        </div>
    );
};
