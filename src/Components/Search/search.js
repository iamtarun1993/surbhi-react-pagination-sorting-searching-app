import React, { useState, useEffect } from 'react';
import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState(sessionStorage.getItem('searchQuery') || '');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  useEffect(() => {
    sessionStorage.setItem('searchQuery', query);
  }, [query]);

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <div className="search-input-container">
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder='"name" or "description"'
        />
      </div>
      <button className="search-button" type="submit">
        <FontAwesomeIcon icon={faSearch} className="search-icon" /> &nbsp;
        Search
      </button>
    </form>
  );
};

export default Search;
