import React from 'react';
import './table.css';
import mock_data from '../../Data/mock_data.json';
import withPaginationAndSortAndSearch from '../Hoc/paginate_sort_search';

const Table = ({ items = [] }) => {
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Last edited</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.dateLastEdited}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default withPaginationAndSortAndSearch(Table, mock_data);