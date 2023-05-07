import React from 'react';
import { FaSortAlphaDown, FaSortAlphaUp, FaSortNumericDown, FaSortNumericUp } from 'react-icons/fa';
import './sort.css';

const Sort = ({ sortBy, onSort }) => {
  const handleSort = (field) => {
    let newSortOrder = sortBy.order === 'asc' ? 'desc' : 'asc';
    onSort({ field, order: newSortOrder });
  };

  const renderSortIcon = (field) => {
    if (sortBy.field !== field) return null;
    if (sortBy.order === 'asc') {
      return field === 'name' ? <FaSortAlphaDown /> : <FaSortNumericDown />;
    } else {
      return field === 'name' ? <FaSortAlphaUp /> : <FaSortNumericUp />;
    }
  };

  return (
    <div className="sort-container">
      <span className="sort-label">Sort by:</span>
      <button className="sort-button" onClick={() => handleSort('name')}>
        Name {renderSortIcon('name')}
      </button>
      <button className="sort-button" onClick={() => handleSort('dateLastEdited')}>
        Last Edited {renderSortIcon('dateLastEdited')}
      </button>
    </div>
  );
};

export default Sort;
