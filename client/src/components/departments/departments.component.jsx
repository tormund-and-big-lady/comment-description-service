import React from 'react';

import './departments.styles.scss';

const Departments = ({ departments, getCategories, departmentSelected, departmentClicked }) => (
  <ul className='departments'>
    {departments.map((department, idx) => (
      <li 
        className={`department ${departmentSelected === idx ? 'selected' : ''}`} 
        key={idx} 
        onClick={() => getCategories(idx, !departmentClicked)}
        onMouseOver={() => departmentClicked ? getCategories(idx, true) : null}
      >
          {department.name}
      </li>
    ))}
  </ul>
)

export default Departments;