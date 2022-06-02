import React, { FC, useState } from "react";
import "./Artists.scss";
import { Card } from "../../components/Card/Card";
import {
    artistsSideBarObj,
    items,
    tobBarFiltersObj,
} from "../../shared/projectData";
import { Pagination } from "./components/Pagination";
import { TopBar } from "./components/TopBar";
import { Sidebar } from "./components/Sidebar";
import {
    useArtistsFilters,
    useLiveSearch,
    usePagination,
    useTopBarFilters,
} from "../../shared/hooks";
import { ICard, sideBarFiltersTypes, topBarFiltersTypes } from "../../types";

export const Artists: FC = () => {
    const [topBarFilters, setTopBarFilters] = useState<topBarFiltersTypes>({
        ...tobBarFiltersObj,
        all: true,
    });
    const [sideBarFilters, setSideBarFilters] = useState<sideBarFiltersTypes>({
        ...artistsSideBarObj,
        all: true,
    });
    const [filtredCards, setFiltredCards] = useState<ICard[]>(items);
    const [cards, setCards] = useState<ICard[]>(filtredCards);
    const { currentPage, setCurrentPage, currentCard, cardsPerPage } =
        usePagination(cards);
    const { value, setValue } = useLiveSearch(filtredCards, setCards);

    useTopBarFilters(
        topBarFilters,
        setCards,
        filtredCards,
        setValue,
        setCurrentPage
    );

    useArtistsFilters(
        setCards,
        setValue,
        setCurrentPage,
        sideBarFilters,
        items,
        setFiltredCards,
        setTopBarFilters,
        tobBarFiltersObj
    );

    const cardList = currentCard.map((card: ICard) => {
        return (
            <Card
                key={card.id}
                name={card.name}
                price={card.price}
                image={card.image}
                isSold={card.isSold}
                id={card.id}
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
                    value={value}
                    setValue={setValue}
                />
                <div className="artists__content">
                    <Sidebar
                        sideBarFiltersObj={artistsSideBarObj}
                        sideBarFilters={sideBarFilters}
                        setSideBarFilters={setSideBarFilters}
                    />
                    <div className="artists__cards">
                        <div className="artists__cards-list">
                            {cards.length === 0 ? (
                                <h1 className="artists__cards-empty">Empty</h1>
                            ) : (
                                cardList
                            )}
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
