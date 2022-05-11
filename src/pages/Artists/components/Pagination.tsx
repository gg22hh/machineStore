import React, { FC } from "react";
import prev from "../../../images/pagination/prev.svg";
import next from "../../../images/pagination/next.svg";

interface PaginationProps {
    cardsPerPage: number;
    totalCards: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    currentPage: number;
}

export const Pagination: FC<PaginationProps> = ({
    cardsPerPage,
    totalCards,
    setCurrentPage,
    currentPage,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    const nextPage = () => {
        if (currentPage === pageNumbers.length) {
            return currentPage;
        } else {
            return setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage === 1) {
            return currentPage;
        } else {
            return setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <button onClick={prevPage} className="prev-arrow">
                <img src={prev} alt="" />
            </button>
            {pageNumbers.map((number) => (
                <button
                    className={
                        number === currentPage
                            ? "pagination__number active"
                            : "pagination__number"
                    }
                    key={number}
                    onClick={() => setCurrentPage(number)}
                >
                    {number}
                </button>
            ))}
            <button onClick={nextPage} className="next-arrow">
                <img src={next} alt="" />
            </button>
        </>
    );
};
