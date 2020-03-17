import React from 'react';
// import style from './searchResults.css';

const SearchResults = (props) => {

  let searchLen = props.search.length;
  let searchIdx = props.result.keyword.search(props.search)
  let searchIdxLen = searchIdx + searchLen

  return (
    <li>
      <span onMouseEnter={() => props.handleMouseOver('resultHoverIdx', props.index)}>
        {props.result.keyword.slice(0, searchIdx)}<strong>{props.result.keyword.slice(searchIdx, searchIdxLen)}</strong>{props.result.keyword.slice(searchIdxLen)}
      </span>
    </li>
  )
}

export default SearchResults;