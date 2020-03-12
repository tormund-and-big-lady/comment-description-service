import React, { Component } from 'react';
import axios from 'axios';
import Logo from './components/logo/logo.component';
import Search from './components/search/search.component';
import SearchForm from './components/search-form/search-form.component';
import Login from './components/login/login.component';
import LoginForm from './components/login-form/login-form.component';
import Cart from './components/cart/cart.component';
import CartForm from './components/cart-form/cart-form.component';
import Departments from './components/departments/departments.component';
import Categories from './components/categories/categories.component';


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
              {/* <SearchForm /> */}
            </div>
            <div className='header-item'>
              <Login />
              {/* <LoginForm /> */}
            </div>
            <div className='header-item'>
              <Cart />
              {/* <CartForm /> */}
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