import React from 'react';
import DepartmentItem from '../departmentItem/departmentItem';
import Categories from '../categories/categories';
import style from './departments.css';

const Departments = (props) => (
  // nav reset handler occurs here
  <div className={style.departmentsDiv} onMouseLeave={() => props.handleMouseOut('nav')}>

    <div>
        {props.departments.map((department, index) => 
          <DepartmentItem 
          key={index}
          index={index} 
            department={department}
            total={props.departments.length}
            getCategories={props.getCategories}
            handleMouseOver={props.handleMouseOver}
            handleAddClass={props.handleAddClass} />)}

    </div>

    <div className={style.centerAlignCategory}>
        {props.categories.map((category, index) => <Categories key={index} category={category} total={props.categories.length} />)}
    </div>

  </div>
)

export default Departments;