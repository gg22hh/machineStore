import React, { useState } from "react";
import { Card } from "../../components/Card/Card";
import {
    useLiveSearch,
    useProductsFilters,
    useTopBarFilters,
} from "../../shared/hooks";
import {
    items,
    productsSideBarObj,
    tobBarFiltersObj,
} from "../../shared/projectData";
import {
    ICard,
    productsSideBarFiltersTypes,
    topBarFiltersTypes,
} from "../../types";
import { Pagination } from "../Artists/components/Pagination";
import { TopBar } from "../Artists/components/TopBar";
import { ProductsSidebar } from "./components/ProductsSidebar";

export const Products = () => {
    const [topBarFilters, setTopBarFilters] = useState<topBarFiltersTypes>({
        ...tobBarFiltersObj,
        all: true,
    });
    const [sideBarFilters, setSideBarFilters] =
        useState<productsSideBarFiltersTypes>({
            ...productsSideBarObj,
            all: true,
        });
    const [filtredCards, setFiltredCards] = useState<ICard[]>(items);
    const [cards, setCards] = useState<ICard[]>(filtredCards);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [cardsPerPage] = useState(16);

    const lastIndex = currentPage * cardsPerPage;
    const firstIndex = lastIndex - cardsPerPage;
    const currentCard = cards.slice(firstIndex, lastIndex);
    const { value, setValue } = useLiveSearch(filtredCards, setCards);

    useTopBarFilters(
        topBarFilters,
        setCards,
        filtredCards,
        setValue,
        setCurrentPage
    );

    useProductsFilters(
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
                    <ProductsSidebar
                        sideBarFiltersObj={productsSideBarObj}
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
