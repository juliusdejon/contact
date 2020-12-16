import React from 'react';

import './Search.scss';

function Search({ search, onSearch }) {
  return (
    <section>
      <div className="search-container">
        <input
          value={search}
          onChange={onSearch}
          placeholder="Search by name"
        />
      </div>
    </section>
  );
}

export default Search;
