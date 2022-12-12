import { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import './styles.scss';

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number,
  initialPage: PropTypes.number,
  onPageChange: PropTypes.func
};

export default function Pagination({ totalItems, pageSize = 24, initialPage = 1, onPageChange }) {
  const totalPages = getFlooredToatalPages(totalItems, pageSize);
  const [currentPage, setCurrentPage] = useState(initialPage);

  function onNextpageClick() {
    const nextPage = getNextPage(currentPage, totalPages);
    setCurrentPage(nextPage);
  }

  function onPreviousPageClick() {
    const prevPage = getPreviousePage(currentPage);
    setCurrentPage(prevPage);
  }

  function ultimaPageClick() {
    const prevPage = totalPages;
    setCurrentPage(prevPage);
  }

  function primeraPageClick() {
    const prevPage = 1;
    setCurrentPage(prevPage);
  }

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage]);

  return (
    <div className="mvl-paginator">
      <span className="mvl-paginator__text">
        Page <strong>{currentPage} </strong> of <strong>{totalPages}</strong>
      </span>
      <div className="mvl-paginator__actions">
        <button disabled={isFirstPage(currentPage)} onClick={onPreviousPageClick}>
        <BiChevronLeft /> PREV 
        </button>
        <button disabled={isFirstPage(currentPage)} onClick={primeraPageClick}>
        <strong>{1} </strong>
        </button>
        <button  onClick={onPreviousPageClick}>
          <strong>{currentPage + 1} </strong>
        </button>
        <button  onClick={onPreviousPageClick}>
        <strong>{currentPage + 2} </strong>
        </button>
        <button  onClick={onPreviousPageClick}>
        <strong>{currentPage + 3} </strong>
        </button>
        <button  onClick={onPreviousPageClick}>
        <strong>{currentPage + 4} </strong>
        </button>
        <span className="mvl-paginator__text">
        ...
      </span>
        <button disabled={isFirstPage(totalPages)} onClick={ultimaPageClick}>
        <strong>{totalPages}</strong>
        </button>
        <button disabled={isLastPage(currentPage, totalPages)} onClick={onNextpageClick}>
          NEXT <BiChevronRight />
        </button>
      </div>
    </div>
  );
}

function isFirstPage(currentPage) {
  return currentPage === 1;
}

function isLastPage(currentPage, maxPage) {
  return currentPage === maxPage;
}

function getPreviousePage(currentPage) {
  return currentPage > 1 ? currentPage - 1 : currentPage;
}

function getNextPage(currentPage, maxPage) {
  return currentPage < maxPage ? currentPage + 1 : maxPage;
}

function getFlooredToatalPages(totalItems, pageSize) {
  return Math.floor(getToatalPages(totalItems, pageSize));
}

function getToatalPages(totalItems, pageSize) {

  return (totalItems / pageSize)+1;
}
