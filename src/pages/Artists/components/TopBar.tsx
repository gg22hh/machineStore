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
    value: string;
    setFilters: (obj: filtersObjTypes) => void;
    setValue: (e) => void;
}

export const TopBar: FC<TopBarProps> = ({
    filtersObj,
    filters,
    value,
    setFilters,
    setValue,
}) => {
    return (
        <div className="topBar">
            <form className="topBar__search">
                <button className="topBar__search-button">
                    <img src={searchIcon} alt="search icon" />
                </button>
                <input
                    className="topBar__search-input"
                    type="text"
                    placeholder="Search..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
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
        </div>
    );
};
