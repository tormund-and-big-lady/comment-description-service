import React, { Component } from 'react';
import axios from 'axios';
import ClickOutHandler from 'react-onclickout';

import Logo from './components/logo/logo.component';
import Search from './components/search/search.component';
import SearchForm from './components/search-form/search-form.component';
import Login from './components/login/login.component';
import LoginForm from './components/login-form/login-form.component';
import Cart from './components/cart/cart.component';
import CartForm from './components/cart-form/cart-form.component';
import Departments from './components/departments/departments.component';
import Categories from './components/categories/categories.component';

import styles from './Navbar.scss';

export default class Navbar extends Component {
  constructor() {
    super()

    this.state = {
      departments: [],
      categories: [],
      departmentSelected: null,
      departmentClicked: false,
      search: {
        show: false,
        trigger: false
      },
      login: false,
      cart: false
    }

    this.retrieveData = this.retrieveData.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleOverlay = this.handleOverlay.bind(this);
    this.onClickOut = this.onClickOut.bind(this);
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
      }, () => this.handleOverlay(clicked))
    } else {
      this.setState({
        categories: [],
        departmentSelected: null,
        departmentClicked: false
      }, () => this.handleOverlay())
    }
  }

  handleMouseOver(component) {
    this.setState(prevState => ({
      [component]: !prevState[component]
    }))
  }

  handleSearch(trigger) {
    if (trigger) {
      this.setState({
        search: {
          show: false,
          trigger: false
        }
      })
    } else {
      this.setState({
        search: {
          show: true
        }
      })
    }
  }

  onClickOut() {
    if (this.state.departmentClicked) {
      this.getCategories(null, !this.state.departmentClicked)
    }
  }

  handleOverlay(clicked) {
    let productDescription = document.getElementById('productDescription');
    let morelooks = document.getElementById('morelooks');
    let reviews = document.getElementById('reviews');
    let arr = [productDescription, morelooks, reviews];

    arr.forEach(elem => {
      if (elem && clicked) {
        elem.classList.add(styles['overlay']);
      } else if (elem && !clicked) {
        elem.classList.remove(elem.classList);
      }
    });
  }

  render() {
    return (
      <div styleName='nav-bar'>
        <div styleName='logo-header'>
          <Logo />
          <div styleName='header'>
            <div styleName='header-item'>
              <Search handleSearch={this.handleSearch} />
              <SearchForm 
                handleSearch={this.handleSearch} 
                search={this.state.search} 
              />
            </div>
            <div 
              styleName='header-item' 
              onMouseEnter={() => this.handleMouseOver('login')}
              onMouseLeave={() => this.handleMouseOver('login')}
            >
              <Login />
              <LoginForm login={this.state.login} />
            </div>
            <div 
              styleName='header-item' 
              onMouseEnter={() => this.handleMouseOver('cart')}
              onMouseLeave={() => this.handleMouseOver('cart')}
            >
              <Cart />
              <CartForm cart={this.state.cart} />
            </div>
          </div>
        </div>
        <ClickOutHandler onClickOut={this.onClickOut}>
          <Departments 
            departments={this.state.departments} 
            getCategories={this.getCategories}
            departmentSelected={this.state.departmentSelected}
            departmentClicked={this.state.departmentClicked}
          />
          <Categories categories={this.state.categories}/>
        </ClickOutHandler>
      </div>
    )
  }
}