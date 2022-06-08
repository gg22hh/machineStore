import React, { FC } from "react";
import { productsSideBarFiltersTypes } from "../../../types";

interface SidebarProps {
    sideBarFiltersObj: productsSideBarFiltersTypes;
    sideBarFilters: productsSideBarFiltersTypes;
    setSideBarFilters: (obj: productsSideBarFiltersTypes) => void;
}

export const ProductsSidebar: FC<SidebarProps> = ({
    sideBarFiltersObj,
    sideBarFilters,
    setSideBarFilters,
}) => {
    const scroll = () => window.scrollTo({ top: 0 });
    const itemClick = (option) => {
        scroll();
        setSideBarFilters({
            ...sideBarFiltersObj,
            [option]: true,
        });
    };

    return (
        <div className="artists__filters">
            <h2 className="artists__filters-title">Clothing</h2>
            <div>
                <button
                    className={
                        sideBarFilters.all
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() =>
                        setSideBarFilters({
                            ...sideBarFiltersObj,
                            all: true,
                        })
                    }
                >
                    All
                </button>
            </div>

            <div>
                <button
                    className={
                        sideBarFilters.jackets
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() =>
                        setSideBarFilters({
                            ...sideBarFiltersObj,
                            jackets: true,
                        })
                    }
                >
                    Jackets
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.hoodies
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() =>
                        setSideBarFilters({
                            ...sideBarFiltersObj,
                            hoodies: true,
                        })
                    }
                >
                    Hoodies
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.sweatshirts
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() =>
                        setSideBarFilters({
                            ...sideBarFiltersObj,
                            sweatshirts: true,
                        })
                    }
                >
                    Sweatshirts
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.tees
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() =>
                        setSideBarFilters({
                            ...sideBarFiltersObj,
                            tees: true,
                        })
                    }
                >
                    Tees
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.pants
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() =>
                        setSideBarFilters({
                            ...sideBarFiltersObj,
                            pants: true,
                        })
                    }
                >
                    Pants
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.backpacks
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() =>
                        setSideBarFilters({
                            ...sideBarFiltersObj,
                            backpacks: true,
                        })
                    }
                >
                    Backpacks/carriers
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.hoodiesTshirt
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() =>
                        setSideBarFilters({
                            ...sideBarFiltersObj,
                            hoodiesTshirt: true,
                        })
                    }
                >
                    Hoodies + T-shirt packs
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.vaultHunters
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() =>
                        setSideBarFilters({
                            ...sideBarFiltersObj,
                            vaultHunters: true,
                        })
                    }
                >
                    Vault hunters
                </button>
            </div>
            <h2 className="artists__filters-title">Accessories</h2>
            <div>
                <button
                    className={
                        sideBarFilters.boneheadHelmets
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() => itemClick("boneheadHelmets")}
                >
                    Bonehead helmets
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.demonPlateSeries
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() => itemClick("demonPlateSeries")}
                >
                    Demon plate series
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.hfBat
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() => itemClick("hfBat")}
                >
                    Hf/bat
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.masks
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() => itemClick("masks")}
                >
                    Masks
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.moleskineJackets
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() => itemClick("moleskineJackets")}
                >
                    Moleskine jackets
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.wallArts
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() => itemClick("wallArts")}
                >
                    Wall arts
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.figures
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() => itemClick("figures")}
                >
                    1/6 figures
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.stickerPacksters
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() => itemClick("stickerPacksters")}
                >
                    Sticker packs
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.vectorPacksfBat
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() => itemClick("vectorPacksfBat")}
                >
                    Vector packs
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.posters
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() => itemClick("posters")}
                >
                    Posters
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.fonts
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() => itemClick("fonts")}
                >
                    Fonts
                </button>
            </div>
        </div>
    );
};
