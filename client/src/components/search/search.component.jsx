import React from 'react';

import './search.styles.scss';

const Search = ({ handleSearch }) => (
  <div styleName='search' onMouseEnter={() => handleSearch()} >
    <div styleName='search-item'>
      <svg styleName='icon' height="24" width="21">
        <path transform="rotate(-44.984 16.5 18.5)"  d="M15.288 14.762h2.424v7.475h-2.424z"></path>
        <path d="M13.5 15.5l-1-1"></path>
        <circle cx="7.5" cy="9.5" r="7"></circle>
      </svg>
    </div>
    
    <div styleName='search-item'>
      <span>Search</span>
    </div>
  </div>
)

export default Search;