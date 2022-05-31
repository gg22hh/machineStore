import React, { FC } from "react";

type sideBarFiltersObjType = {
    all: boolean;
    machine56: boolean;
    sayaWorks: boolean;
    glitchNetwork: boolean;
    birdy: boolean;
    eez: boolean;
    kmr: boolean;
    konrtolaltdelt: boolean;
};

interface SidebarProps {
    sideBarFiltersObj: sideBarFiltersObjType;
    sideBarFilters: sideBarFiltersObjType;
    setSideBarFilters: (obj: sideBarFiltersObjType) => void;
}

export const Sidebar: FC<SidebarProps> = ({
    sideBarFiltersObj,
    sideBarFilters,
    setSideBarFilters,
}) => {
    return (
        <div className="artists__filters">
            <h2 className="artists__filters-title">Artists</h2>
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
                        sideBarFilters.machine56
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() =>
                        setSideBarFilters({
                            ...sideBarFiltersObj,
                            machine56: true,
                        })
                    }
                >
                    Machine 56
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.sayaWorks
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() =>
                        setSideBarFilters({
                            ...sideBarFiltersObj,
                            sayaWorks: true,
                        })
                    }
                >
                    Saya works
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.glitchNetwork
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() =>
                        setSideBarFilters({
                            ...sideBarFiltersObj,
                            glitchNetwork: true,
                        })
                    }
                >
                    Glitch-network
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.birdy
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() =>
                        setSideBarFilters({
                            ...sideBarFiltersObj,
                            birdy: true,
                        })
                    }
                >
                    Birdy
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.eez
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() =>
                        setSideBarFilters({
                            ...sideBarFiltersObj,
                            eez: true,
                        })
                    }
                >
                    EEZ
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.kmr
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() =>
                        setSideBarFilters({
                            ...sideBarFiltersObj,
                            kmr: true,
                        })
                    }
                >
                    KMR
                </button>
            </div>
            <div>
                <button
                    className={
                        sideBarFilters.konrtolaltdelt
                            ? "artists__filters-item active"
                            : "artists__filters-item"
                    }
                    onClick={() =>
                        setSideBarFilters({
                            ...sideBarFiltersObj,
                            konrtolaltdelt: true,
                        })
                    }
                >
                    Konrtolaltdelt
                </button>
            </div>
        </div>
    );
};
