import React, { useState, useEffect } from 'react';
import './pagination.css';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [currentPage, setCurrentPage] = useState(sessionStorage.getItem('currentPage') || 1);

  useEffect(() => {
    // Store currentPage in session when it changes
    sessionStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} className={`page-item ${currentPage == number ? 'active' : ''}`}>
        <button type="button" onClick={() => handlePageClick(number)} className='page-link'>
          {number}
        </button>
      </li>
    );
  });

  return (
    <nav>
      <ul className='pagination'>
        <li className={`page-item ${currentPage == 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handlePageClick(Number(currentPage) - 1)}>&laquo;</button>
        </li>
        {renderPageNumbers}
        <li className={`page-item ${currentPage == pageNumbers.length ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handlePageClick(Number(currentPage) + 1)}>&raquo;</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
