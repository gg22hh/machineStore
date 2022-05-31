import React, { FC, useEffect, useState } from "react";
import "./Artists.scss";
import { Card } from "../../components/Card/Card";
import { items } from "../../shared/projectData";
import { Pagination } from "./components/Pagination";
import { TopBar } from "./components/TopBar";
import { Sidebar } from "./components/Sidebar";

export const Artists: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(12);
    const tobBarFiltersObj = {
        all: false,
        sale: false,
        inStock: false,
        soldOut: false,
    };
    const sideBarFiltersObj = {
        all: false,
        machine56: false,
        sayaWorks: false,
        glitchNetwork: false,
        birdy: false,
        eez: false,
        kmr: false,
        konrtolaltdelt: false,
    };
    const [topBarFilters, setTopBarFilters] = useState({
        ...tobBarFiltersObj,
        all: true,
    });
    const [sideBarFilters, setSideBarFilters] = useState({
        ...sideBarFiltersObj,
        all: true,
    });
    const [filtredCards, setFiltredCards] = useState(items);
    const [cards, setCards] = useState(filtredCards);
    useEffect(() => {
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
    }, [topBarFilters]);

    useEffect(() => {
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
    }, [sideBarFilters]);

    const lastIndex = currentPage * cardsPerPage;
    const firstIndex = lastIndex - cardsPerPage;
    const currentCard = cards.slice(firstIndex, lastIndex);

    const cardList = currentCard.map((card) => {
        return (
            <Card
                key={card.id}
                name={card.name}
                price={card.price}
                image={card.image}
                isSold={card.isSold}
            />
        );
    });

    return (
        <div className="artists">
            <div className="container">
                <TopBar
                    filtersObj={tobBarFiltersObj}
                    filters={topBarFilters}
                    setFilters={setTopBarFilters}
                />
                <div className="artists__content">
                    <Sidebar
                        sideBarFiltersObj={sideBarFiltersObj}
                        sideBarFilters={sideBarFilters}
                        setSideBarFilters={setSideBarFilters}
                    />
                    <div className="artists__cards">
                        <div className="artists__cards-list">
                            {cards.length === 0 ? <h1>Empty</h1> : cardList}
                        </div>
                        {cards.length > 12 && (
                            <div className="artists__cards-pagination">
                                <Pagination
                                    cardsPerPage={cardsPerPage}
                                    totalCards={cards.length}
                                    setCurrentPage={setCurrentPage}
                                    currentPage={currentPage}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
