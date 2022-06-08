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

export interface productsSideBarFiltersTypes {
    all: boolean;
    jackets: boolean;
    hoodies: boolean;
    sweatshirts: boolean;
    tees: boolean;
    pants: boolean;
    backpacks: boolean;
    hoodiesTshirt: boolean;
    vaultHunters: boolean;
    boneheadHelmets: boolean;
    demonPlateSeries: boolean;
    hfBat: boolean;
    masks: boolean;
    moleskineJackets: boolean;
    wallArts: boolean;
    figures: boolean;
    stickerPacksters: boolean;
    vectorPacksfBat: boolean;
    posters: boolean;
    fonts: boolean;
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
    clothing: string;
    accessories: string;
}

export interface ICartItem {
    cartId: number;
    cartSize: string;
    cartTotalPrice: number;
    cartPrice: number;
    cartName: string;
    cartImage: string;
}
