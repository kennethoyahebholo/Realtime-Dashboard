import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import UseCustomResizer from "@/utils/useCustomResizer";

import Previous from "@/assets/svg_components/Previous";
import Next from "@/assets/svg_components/Next";

import PaginationStyles from "./Pagination.module.scss";

const Pagination = ({ count, setPage, pageSize, page }) => {
  const { isMobile } = UseCustomResizer({ width: 560 });
  const handlePageClick = (data) => {
    const { selected } = data;
    setPage(selected + 1);
  };
  const totalPages = Math.ceil(count / pageSize);
  const prevDisabled = page <= 1;
  const nextDisabled = page >= totalPages;
  const [localPage, setLocalPage] = useState(page);
  const [pageRange, setPageRange] = useState(0);
  const handleChange = (e) => {
    const { value } = e.target;
    if (value > totalPages) {
      setLocalPage(totalPages);
    } else {
      setLocalPage(value);
    }
  };

  const handleGoToPage = () => {
    if (page !== localPage) {
      setPage(localPage < 1 || !localPage ? 1 : localPage);
    }
  };

  useEffect(() => {
    if (isMobile) {
      setPageRange(0);
    } else {
      setPageRange(2);
    }
  }, [isMobile]);

  return (
    <div className={PaginationStyles?.pagination}>
      <div className={PaginationStyles?.pagination__pageCount}>
        <strong className={PaginationStyles?.pagination__pageNum}>
          {page}
        </strong>
        <span
          className={PaginationStyles?.pagination__pageTotal}
        >{`of ${totalPages} pages`}</span>
      </div>
      <ReactPaginate
        previousLabel={Previous({ disabled: prevDisabled })}
        nextLabel={Next({ disabled: nextDisabled })}
        breakLabel="..."
        breakClassName={PaginationStyles?.pagination__breakMe}
        pageCount={totalPages}
        marginPagesDisplayed={pageRange}
        forcePage={page - 1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={PaginationStyles?.pagination__pagination}
        activeClassName={PaginationStyles?.pagination__active}
        pageClassName={PaginationStyles?.pagination__eachPage}
      />
      <div>
        <span
          className={PaginationStyles?.pagination__goToPage}
          onClick={handleGoToPage}
        >
          Go to page
        </span>
        <input
          className={PaginationStyles?.pagination__input}
          type="number"
          onChange={handleChange}
          value={localPage}
        />
      </div>
    </div>
  );
};

export default Pagination;
