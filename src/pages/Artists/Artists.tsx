import React, { FC, useState } from "react";
import "./Artists.scss";
import searchIcon from "../../images/artists/search-icon.svg";
import { Card } from "../../components/Card/Card";
import { cards } from "../../shared/projectData";
import { Pagination } from "./components/Pagination";

export const Artists: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(12);

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
                <div className="topBar">
                    <div className="topBar__search">
                        <button className="topBar__search-button">
                            <img src={searchIcon} alt="search icon" />
                        </button>
                        <input
                            className="topBar__search-input"
                            type="text"
                            placeholder="Search..."
                        />
                    </div>
                    <div className="topBar__filter">
                        <button className="topBar__filter-button active">
                            All
                        </button>
                        <button className="topBar__filter-button">Sale</button>
                        <button className="topBar__filter-button">
                            In stock
                        </button>
                        <button className="topBar__filter-button">
                            Sold out
                        </button>
                    </div>
                    <div className="topBar__sort">
                        <button className="topBar__filter-button active">
                            Sort by
                        </button>
                        <button className="topBar__filter-button">
                            Featured
                        </button>
                    </div>
                </div>
                <div className="artists__cards">
                    <div className="artists__cards-list">{cardList}</div>
                    <div className="artists__cards-pagination">
                        <Pagination
                            cardsPerPage={cardsPerPage}
                            totalCards={cards.length}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
