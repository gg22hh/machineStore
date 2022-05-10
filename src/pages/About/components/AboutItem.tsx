import React, { FC } from "react";

interface AboutItemProps {
    types: string[];
    image: string;
    size: {
        name: string;
        width: string;
        height: string;
    }[];
}

export const AboutItem: FC<AboutItemProps> = ({ types, image, size }) => {
    const typesList = types.map((type) => {
        return <div key={type}>{type}</div>;
    });

    const sizeList = size.map((size) => {
        return (
            <tr key={size.name}>
                <th>{size.name}</th>
                <td>{size.width}</td>
                <td>{size.height}</td>
            </tr>
        );
    });

    return (
        <div className="about__item">
            <h4 className="about__item-uptitle">Chart applied for:</h4>
            <div className="about__item-types">{typesList}</div>
            <div className="about__item-info">
                <img
                    src={image}
                    alt="about item"
                    className="about__item-image"
                />
                <table className="about__item-size">
                    <thead>
                        <tr>
                            <th></th>
                            <th>W</th>
                            <th>H</th>
                        </tr>
                    </thead>
                    <tbody>{sizeList}</tbody>
                </table>
            </div>
        </div>
    );
};
