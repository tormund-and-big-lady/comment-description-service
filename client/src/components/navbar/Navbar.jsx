import React, { Component } from 'react';
import axios from 'axios';
import Logo from './logo/logo.component';
import Search from './search/search.component';
import Login from './login/login.component';
import Cart from './cart/cart.component';
import Departments from './departments/departments.component';
import Categories from './categories/categories.component';


import './Navbar.scss';

export default class Navbar extends Component {
  constructor() {
    super()

    this.state = {
      departments: [],
      categories: [],
      departmentSelected: null,
      departmentClicked: false
    }

    this.retrieveData = this.retrieveData.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData() {
    axios
      .get('/navbar/navs')
      .then(({ data }) => this.setState({ departments: data }, () => console.log(this.state.departments)))
      .catch(err => console.log(err))
  }

  getCategories(idx, clicked) {
    if (clicked) {
      this.setState({ 
        categories: this.state.departments[idx].categories, 
        departmentSelected: idx,
        departmentClicked: true
      })
    } else {
      this.setState({
        categories: [],
        departmentSelected: null,
        departmentClicked: false
      })
    }
  }

  render() {
    return (
      <div className='nav-bar'>
        <div className='logo-header'>
          <Logo />
          <div className='header'>
            <div className='header-item'>
              <Search />
            </div>
            <div className='header-item'>
              <Login />
            </div>
            <div className='header-item'>
              <Cart />
            </div>
          </div>
        </div>
        <Departments 
          departments={this.state.departments} 
          getCategories={this.getCategories}
          departmentSelected={this.state.departmentSelected}
          departmentClicked={this.state.departmentClicked}
        />
        {this.state.categories ? <Categories categories={this.state.categories}/> : null}
      </div>
    )
  }
}