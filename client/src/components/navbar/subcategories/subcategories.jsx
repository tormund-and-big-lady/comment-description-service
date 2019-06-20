import React from './node_modules/react';
import style from './Subcategories.css';

const Subcategories = (props) => (
  <li>
    <span className={style.subcategory}>
      {props.subcategory.name}
    </span>
  </li>
)

export default Subcategories;