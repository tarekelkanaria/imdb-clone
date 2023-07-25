"use client";

import { useEffect, useState } from "react";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import classes from "./PaginationActions.module.css";
import { useRouter } from "next/navigation";

const PaginationActions: React.FC<{
  totalPages: number;
  category: string;
  updatedNumber?: number;
}> = ({ totalPages, category, updatedNumber }) => {
  const [pageNumber, setPageNumber] = useState(
    updatedNumber ? updatedNumber : 1
  );
  const router = useRouter();

  useEffect(() => {
    const categoryParam = category === "topRated" ? "?genre=topRated" : "";
    if (pageNumber === 1) {
      router.push(`/${categoryParam}`);
    } else {
      router.push(`/archive/${pageNumber}${categoryParam}`);
    }
  }, [category, pageNumber]);

  const firstPage = () => {
    setPageNumber(1);
  };

  const decreasePage = () => {
    setPageNumber((prevPage) => prevPage - 1);
  };

  const increasePage = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };

  const lastPage = (page: number) => {
    setPageNumber(page);
  };

  return (
    <section className="container mb-3">
      <article className="max-w-max mx-auto flex gap-2 items-center justify-center">
        <button
          className={classes["paginate-btn"]}
          onClick={firstPage}
          disabled={pageNumber === 1}
        >
          First
        </button>
        <button
          className={classes["paginate-btn"]}
          onClick={decreasePage}
          disabled={pageNumber <= 1}
        >
          <BiSolidLeftArrow />
        </button>
        <strong className="text-xl font-bold text-amber-600">
          {pageNumber}
        </strong>
        <button
          className={classes["paginate-btn"]}
          onClick={increasePage}
          disabled={pageNumber === (totalPages > 500 ? 500 : totalPages)}
        >
          <BiSolidRightArrow />
        </button>
        <button
          className={classes["paginate-btn"]}
          onClick={() => lastPage(totalPages > 500 ? 500 : totalPages)}
          disabled={pageNumber === (totalPages > 500 ? 500 : totalPages)}
        >
          Last
        </button>
      </article>
    </section>
  );
};

export default PaginationActions;
