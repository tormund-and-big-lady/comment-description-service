import React from 'react';

import './search-form.styles.scss';

const SearchForm = props => (
  <div className='search-form'>
    <div className='box'>
      <div className='box-arrow' />
    </div>
    <div className='search-box'>
      <div className='search-box-item'>
        <input type='text' placeholder='What can we help you find?'/>
      </div>
      <div className='search-box-item'>
        <div className='item-clear'>
          <span>Clear</span>
        </div>
        <div className='item-clear'>
          <svg height='10' width='10' className='search-close'>
            <path d='M2 2l8 8m0-8l-8 8'></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
)

export default SearchForm;