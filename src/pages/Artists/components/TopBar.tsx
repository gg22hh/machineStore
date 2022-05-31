import React, { FC, useState } from "react";
import searchIcon from "../../../images/artists/search-icon.svg";

type filtersObjTypes = {
    all: boolean;
    sale: boolean;
    inStock: boolean;
    soldOut: boolean;
};

interface TopBarProps {
    filtersObj: filtersObjTypes;
    filters: filtersObjTypes;
    setFilters: (filtersObjTypes) => void;
}

export const TopBar: FC<TopBarProps> = ({
    filtersObj,
    filters,
    setFilters,
}) => {
    return (
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
                <button
                    className={
                        filters.all
                            ? "topBar__filter-button active"
                            : "topBar__filter-button"
                    }
                    onClick={() => setFilters({ ...filtersObj, all: true })}
                >
                    All
                </button>
                <button
                    className={
                        filters.sale
                            ? "topBar__filter-button active"
                            : "topBar__filter-button"
                    }
                    onClick={() => setFilters({ ...filtersObj, sale: true })}
                >
                    Sale
                </button>
                <button
                    className={
                        filters.inStock
                            ? "topBar__filter-button active"
                            : "topBar__filter-button"
                    }
                    onClick={() => setFilters({ ...filtersObj, inStock: true })}
                >
                    In stock
                </button>
                <button
                    className={
                        filters.soldOut
                            ? "topBar__filter-button active"
                            : "topBar__filter-button"
                    }
                    onClick={() => setFilters({ ...filtersObj, soldOut: true })}
                >
                    Sold out
                </button>
            </div>
            <div className="topBar__sort">
                <button className="topBar__filter-button active">
                    Sort by
                </button>
                <button className="topBar__filter-button">Featured</button>
            </div>
        </div>
    );
};
