import React from "react";

export interface topBarFiltersTypes {
    all: boolean;
    sale: boolean;
    inStock: boolean;
    soldOut: boolean;
}

export interface sideBarFiltersTypes {
    all: boolean;
    machine56: boolean;
    sayaWorks: boolean;
    glitchNetwork: boolean;
    birdy: boolean;
    eez: boolean;
    kmr: boolean;
    konrtolaltdelt: boolean;
}

export interface ICard {
    id: number;
    name: string;
    price: string;
    image: string;
    isSold: boolean;
    author: string;
    sale?: boolean;
}
