import React from 'react';
import style from './subcategories.css';

const Subcategories = (props) => (
  <li>
    <span className={style.subcategory}>
      {props.subcategory.name}
    </span>
  </li>
)

export default Subcategories;