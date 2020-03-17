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
      departmentClicked: false,
      search: false,
      login: false,
      cart: false
    }

    this.retrieveData = this.retrieveData.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.handleAddClass = this.handleAddClass.bind(this);
    this.handleRemoveClass = this.handleRemoveClass.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData() {
    axios
      .get('/navbar/navs')
      .then(({ data }) => this.setState({ departments: data }))
      .catch(err => console.log(err))
  }

  getCategories(idx, clicked) {
    if (clicked) {
      this.setState({ 
        categories: this.state.departments[idx].categories, 
        departmentSelected: idx,
        departmentClicked: true
      }, () => this.handleAddClass())
    } else {
      this.setState({
        categories: [],
        departmentSelected: null,
        departmentClicked: false
      }, () => this.handleRemoveClass())
    }
  }

  handleMouseOver(component) {
    this.setState(prevState => ({
      [component]: !prevState[component]
    }), () => console.log(this.state))
  }

  handleAddClass() {
    let productDescription = document.getElementById('productDescription');
    // let morelooks = document.getElementById('morelooks');
    // let reviews = document.getElementById('reviews');

    if (productDescription) {
      productDescription.classList.add('overlay');
    }

    // if (morelooks) {
    //   morelooks.classList.add('overlay');
    // }

    // if (reviews) {
    //   reviews.classList.add('overlay');
    }

  handleRemoveClass() {
    let productDescription = document.getElementById('productDescription');
    // let morelooks = document.getElementById('morelooks');
    // let reviews = document.getElementById('reviews');

    if (productDescription && productDescription.className) {
      productDescription.classList.remove(productDescription.className);
    }

    // if (morelooks && morelooks.className) {
    //   morelooks.classList.remove(morelooks.className);
    // }

    // if (reviews && reviews.className) {
    //   reviews.classList.remove(reviews.className);
    // }
  }

  render() {
    return (
      <div className='nav-bar'>
        <div className='logo-header'>
          <Logo />
          <div className='header'>
            <div className='header-item'>
              <Search handleMouseOver={this.handleMouseOver} />
              <SearchForm handleMouseOver={this.handleMouseOver} search={this.state.search} />
            </div>
            <div className='header-item login' onMouseEnter={() => this.handleMouseOver('login')} onMouseLeave={() => this.handleMouseOver('login')}>
              <Login />
              <LoginForm login={this.state.login} />
            </div>
            <div className='header-item' onMouseEnter={() => this.handleMouseOver('cart')} onMouseLeave={() => this.handleMouseOver('cart')}>
              <Cart />
              <CartForm cart={this.state.cart} />
            </div>
          </div>
        </div>
        <Departments 
          departments={this.state.departments} 
          getCategories={this.getCategories}
          departmentSelected={this.state.departmentSelected}
          departmentClicked={this.state.departmentClicked}
        />
        <Categories categories={this.state.categories}/>
      </div>
    )
  }
}