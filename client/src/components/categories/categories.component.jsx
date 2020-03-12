import React from 'react';

import './categories.styles.scss';

const Categories = ({ categories }) => (
  <div className='categories'>
    {categories.map((category, idx) => {
      const { name, subcategories } = category;
      return (
        <div className='category' key={idx}>
          <h5 className='category-name'>
            {name}
          </h5>

          <ul className='subcategories'>
            {subcategories.map((subcategory, idx) => {
              const { name } = subcategory;
              return (
                <li className='subcategory-name' key={idx}><span>{name}</span></li>
              )
            })}
          </ul>
        </div>
      )
    })}
  </div>
)
 
    


export default Categories;