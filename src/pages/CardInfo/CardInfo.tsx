import React, { FC } from "react";

interface CardInfoProps {
    name: string;
}

export const CardInfo: FC<CardInfoProps> = ({ name }) => {
    return <div>{name}</div>;
};
