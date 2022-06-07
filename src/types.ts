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
    price: number;
    image: string;
    isSold: boolean;
    author: string;
    sale?: boolean;
    cardInfoMini1: string;
    cardInfoMini2: string;
    cardInfoMini3: string;
    text1: string;
    text2: string;
}

export interface ICartItem {
    cartId: number;
    cartSize: string;
    cartTotalPrice: number;
    cartPrice: number;
    cartName: string;
    cartImage: string;
}
