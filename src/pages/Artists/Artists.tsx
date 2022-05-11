import React, { FC } from "react";
import "./Artists.scss";
import searchIcon from "../../images/artists/search-icon.svg";

export const Artists: FC = () => {
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
            </div>
        </div>
    );
};
