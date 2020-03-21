import React from 'react';

import './search-results.scss';

const SearchResults = ({ index, result, search, handleMouseOver}) => {

  let searchLen = search.length;
  let searchIdx = result.keyword.search(search);
  let searchIdxLen = searchIdx + searchLen;

  return (
    <li styleName='result'>
      <span onMouseEnter={() => handleMouseOver('resultHoverIdx', index)}>
        {result.keyword.slice(0, searchIdx)}<strong>{result.keyword.slice(searchIdx, searchIdxLen)}</strong>{result.keyword.slice(searchIdxLen)}
      </span>
    </li>
  )
}

export default SearchResults;