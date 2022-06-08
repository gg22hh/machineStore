import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
    ICard,
    productsSideBarFiltersTypes,
    sideBarFiltersTypes,
    topBarFiltersTypes,
} from "../types";

export const usePagination = (cards: ICard[]) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [cardsPerPage] = useState(12);

    const lastIndex = currentPage * cardsPerPage;
    const firstIndex = lastIndex - cardsPerPage;
    const currentCard = cards.slice(firstIndex, lastIndex);

    return { currentPage, setCurrentPage, currentCard, cardsPerPage };
};

export const useLiveSearch = (
    filtredCards: ICard[],
    setCards: React.Dispatch<React.SetStateAction<ICard[]>>
) => {
    const [value, setValue] = useState<string>("");
    useEffect(() => {
        const searchedPosts = filtredCards.filter((card) => {
            return card.name.toLowerCase().includes(value.toLowerCase());
        });
        setCards(searchedPosts);
    }, [value, filtredCards, setCards]);

    return { value, setValue };
};

export const useTopBarFilters = (
    topBarFilters: topBarFiltersTypes,
    setCards: React.Dispatch<React.SetStateAction<ICard[]>>,
    filtredCards: ICard[],
    setValue: React.Dispatch<React.SetStateAction<string>>,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
    useEffect(() => {
        setValue("");
        if (topBarFilters.all) {
            setCards(filtredCards);
        } else if (topBarFilters.soldOut) {
            const filtredItems = filtredCards.filter(
                (item) => item.isSold === true
            );
            setCards(filtredItems);
            setCurrentPage(1);
        } else if (topBarFilters.inStock) {
            const filtredItems = filtredCards.filter(
                (item) => item.isSold !== true
            );
            setCards(filtredItems);
            setCurrentPage(1);
        } else if (topBarFilters.sale) {
            const itemsInStock = filtredCards.filter(
                (item) => item.isSold !== true
            );
            const filtredItems = itemsInStock.filter((item) => item.sale);
            setCards(filtredItems);
            setCurrentPage(1);
        }
    }, [topBarFilters, setCards, filtredCards, setValue, setCurrentPage]);
};

export const useArtistsFilters = (
    setCards: React.Dispatch<React.SetStateAction<ICard[]>>,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    sideBarFilters: sideBarFiltersTypes,
    items: ICard[],
    setFiltredCards: React.Dispatch<React.SetStateAction<ICard[]>>,
    setTopBarFilters: React.Dispatch<React.SetStateAction<topBarFiltersTypes>>,
    tobBarFiltersObj: topBarFiltersTypes
) => {
    useEffect(() => {
        setValue("");
        setCurrentPage(1);
        if (sideBarFilters.all) {
            setFiltredCards(items);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.machine56) {
            const filtred = items.filter((item) => item.author === "machine56");
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.sayaWorks) {
            const filtred = items.filter((item) => item.author === "sayaWorks");
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.glitchNetwork) {
            const filtred = items.filter(
                (item) => item.author === "glitchNetwork"
            );
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.birdy) {
            const filtred = items.filter((item) => item.author === "birdy");
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.eez) {
            const filtred = items.filter((item) => item.author === "eez");
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.kmr) {
            const filtred = items.filter((item) => item.author === "kmr");
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.konrtolaltdelt) {
            const filtred = items.filter(
                (item) => item.author === "konrtolaltdelt"
            );
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        }
    }, [
        setCards,
        setValue,
        setCurrentPage,
        sideBarFilters,
        items,
        setFiltredCards,
        setTopBarFilters,
        tobBarFiltersObj,
    ]);
};

export const useProductsFilters = (
    setCards: React.Dispatch<React.SetStateAction<ICard[]>>,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    sideBarFilters: productsSideBarFiltersTypes,
    items: ICard[],
    setFiltredCards: React.Dispatch<React.SetStateAction<ICard[]>>,
    setTopBarFilters: React.Dispatch<React.SetStateAction<topBarFiltersTypes>>,
    tobBarFiltersObj: topBarFiltersTypes
) => {
    useEffect(() => {
        setValue("");
        setCurrentPage(1);
        if (sideBarFilters.all) {
            setFiltredCards(items);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.jackets) {
            const filtred = items.filter((item) => item.clothing === "jackets");
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.hoodies) {
            const filtred = items.filter((item) => item.clothing === "hoodies");
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.sweatshirts) {
            const filtred = items.filter(
                (item) => item.clothing === "sweatshirts"
            );
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.tees) {
            const filtred = items.filter((item) => item.clothing === "tees");
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.pants) {
            const filtred = items.filter((item) => item.clothing === "pants");
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.backpacks) {
            const filtred = items.filter(
                (item) => item.clothing === "backpacks"
            );
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.hoodiesTshirt) {
            const filtred = items.filter(
                (item) => item.clothing === "hoodiesTshirt"
            );
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.vaultHunters) {
            const filtred = items.filter(
                (item) => item.clothing === "vaultHunters"
            );
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.boneheadHelmets) {
            const filtred = items.filter(
                (item) => item.accessories === "boneheadHelmets"
            );
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.demonPlateSeries) {
            const filtred = items.filter(
                (item) => item.accessories === "demonPlateSeries"
            );
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.hfBat) {
            const filtred = items.filter(
                (item) => item.accessories === "hfBat"
            );
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.masks) {
            const filtred = items.filter(
                (item) => item.accessories === "masks"
            );
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.moleskineJackets) {
            const filtred = items.filter(
                (item) => item.accessories === "moleskineJackets"
            );
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.wallArts) {
            const filtred = items.filter(
                (item) => item.accessories === "wallArts"
            );
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.figures) {
            const filtred = items.filter(
                (item) => item.accessories === "figures"
            );
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.stickerPacksters) {
            const filtred = items.filter(
                (item) => item.accessories === "stickerPacksters"
            );
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.vectorPacksfBat) {
            const filtred = items.filter(
                (item) => item.accessories === "vectorPacksfBat"
            );
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.posters) {
            const filtred = items.filter(
                (item) => item.accessories === "posters"
            );
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        } else if (sideBarFilters.fonts) {
            const filtred = items.filter(
                (item) => item.accessories === "fonts"
            );
            setFiltredCards(filtred);
            setCards(filtred);
            setTopBarFilters({ ...tobBarFiltersObj, all: true });
        }
    }, [
        setCards,
        setValue,
        setCurrentPage,
        sideBarFilters,
        items,
        setFiltredCards,
        setTopBarFilters,
        tobBarFiltersObj,
    ]);
};

export const useScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location]);
};
