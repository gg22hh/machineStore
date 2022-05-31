import React, { FC, useEffect, useState } from "react";
import "./Artists.scss";
import { Card } from "../../components/Card/Card";
import { items } from "../../shared/projectData";
import { Pagination } from "./components/Pagination";
import { TopBar } from "./components/TopBar";

export const Artists: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(12);
    const filtersObj = {
        all: false,
        sale: false,
        inStock: false,
        soldOut: false,
    };
    const [filters, setFilters] = useState({ ...filtersObj, all: true });
    const [cards, setCards] = useState(items);
    useEffect(() => {
        if (filters.all) {
            setCards(items);
        } else if (filters.soldOut) {
            const filtredItems = items.filter((item) => item.isSold === true);
            setCards(filtredItems);
            setCurrentPage(1);
        } else if (filters.inStock) {
            const filtredItems = items.filter((item) => item.isSold !== true);
            setCards(filtredItems);
            setCurrentPage(1);
        } else if (filters.sale) {
            const itemsInStock = items.filter((item) => item.isSold !== true);
            const filtredItems = itemsInStock.filter((item) => item.sale);
            setCards(filtredItems);
            setCurrentPage(1);
        }
    }, [filters]);

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
                    filtersObj={filtersObj}
                    filters={filters}
                    setFilters={setFilters}
                />
                <div className="artists__cards">
                    <div className="artists__cards-list">{cardList}</div>
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
    );
};
