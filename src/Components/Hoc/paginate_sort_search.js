import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/pagination';
import Sort from '../Sort/sort';
import Search from '../Search/search';
import mock_data from '../../Data/mock_data.json';

const withPaginationAndSortAndSearch = (WrappedComponent) => {
  const WithPaginationAndSortAndSearch = () => {
    const [currentPage, setCurrentPage] = useState(sessionStorage.getItem('currentPage') || 1);
    const [itemsPerPage, setItemsPerPage] = useState(sessionStorage.getItem('itemsPerPage') || 9);
    const [sortBy, setSortBy] = useState(JSON.parse(sessionStorage.getItem('sortBy')) || { field: 'name', order: 'asc' });
    const [query, setQuery] = useState(sessionStorage.getItem('query') || '');

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Check if mock_data is defined before slicing
    const paginatedItems = mock_data ? mock_data.slice(indexOfFirstItem, indexOfLastItem) : [];

    const sortedItems = React.useMemo(() => {
      if (sortBy.field && sortBy.order && paginatedItems) {
        const sortedItems = [...paginatedItems].sort((a, b) => {
          const fieldA = a[sortBy.field];
          const fieldB = b[sortBy.field];
          if (sortBy.order === 'asc') {
            return fieldA < fieldB ? -1 : 1;
          } else {
            return fieldA > fieldB ? -1 : 1;
          }
        });
        return sortedItems;
      } else {
        return paginatedItems;
      }
    }, [sortBy, paginatedItems]);

    const filteredItems = React.useMemo(() => {
      if (query && sortedItems) {
        const lowerCaseQuery = query.toLowerCase();
        const exactMatch = /^".+"$/.test(query);

        const filteredItems = sortedItems.filter((item) => {
          const name = item.name.toLowerCase();
          const description = item.description.toLowerCase();
          if (exactMatch) {
            const phrase = query.slice(1, -1).toLowerCase();
            return name === phrase || description === phrase;
          } else {
            return name.includes(lowerCaseQuery) || description.includes(lowerCaseQuery);
          }
        });
        return filteredItems;
      } else {
        return sortedItems;
      }
    }, [query, sortedItems]);

    const paginate = (pageNumber) => {
      sessionStorage.setItem('currentPage', pageNumber);
      setCurrentPage(pageNumber);
    };

    const totalItems = mock_data ? mock_data.length : 0;

    const handleSort = (sortParams) => {
      sessionStorage.setItem('sortBy', JSON.stringify(sortParams));
      setSortBy(sortParams);
    };

    const handleSearch = (query) => {
      sessionStorage.setItem('query', query);
      setQuery(query);
    };


    return (
      <div>
        <Search onSearch={handleSearch} />
        <Sort sortBy={sortBy} onSort={handleSort} />
        <WrappedComponent
          items={filteredItems}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          mockData={mock_data} // pass mock_data down as a prop
        />
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          paginate={paginate}
        />
      </div>
    );
  };

  return WithPaginationAndSortAndSearch;
};

export default withPaginationAndSortAndSearch;

