import React from 'react';
import './grid.css';
import mock_data from '../../Data/mock_data.json';
import withPaginationAndSortAndSearch from '../Hoc/paginate_sort_search';

const Grid = ({ items = [] }) => {
  return (
    <div>
      <div className="grid-container">
        {items.map((item, index) => (
          <div key={index} className="grid-item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Last edited: {item.dateLastEdited}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withPaginationAndSortAndSearch(Grid, mock_data);
