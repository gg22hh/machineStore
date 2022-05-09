import React, { FC } from "react";
import "./Button.scss";

interface ButtonProps {
    children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ children }) => {
    return <button className="button">{children}</button>;
};
