import React from 'react';
import axios from 'axios';
import Logo from './logo/logo';
import Search from './search/search';
import Login from './login/login';
import Cart from './cart/cart';
import Departments from './departments/departments.jsx';
import SearchResults from './searchresults/searchresults.jsx';
import style from './navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      results: [],
      resultHoverIdx: 0,
      departments: [],
      categories: [],
      subcategories: [],
      searchHover: false,
      accountHover: false,
      cartHover: false
    }

    this.retrieveData = this.retrieveData.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleSearchResults = this.handleSearchResults.bind(this);
    this.handleAddClass = this.handleAddClass.bind(this);
    this.handleRemoveClass = this.handleRemoveClass.bind(this);
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

  getCategories(idx) {
    this.setState({ categories: this.state.departments[idx].categories })
  }

  handleMouseOver(stateName, idx) {
    // if statement is to catch search result related logic
    if (stateName === 'resultHoverIdx') {
      this.setState({ [stateName]: idx })
    } else {
      this.setState({ [stateName]: true })
    }
  }

  handleMouseOut(stateName) {
    // if statement is to catch nav related logic involving resetting the nav-bar state as well as removing the blur effect applied on mouseOver
    if (stateName === 'nav') {
      this.setState({
        nav: false,
        categories: [],
        subcategories: []
      }, () => this.handleRemoveClass())
    } else {
      this.setState({ [stateName]: false })
    }

  }

  handleSearchResults(e) {
    if (e.target.value) {
      this.setState({ search: e.target.value }, () =>
        axios
          .get(`/navbar/search/${this.state.search}`)
          .then(({ data }) => this.setState({ results: data }))
          .catch(err => console.log(err)))
    } else {
      this.setState({
        search: '',
        results: []
      })
    }
  }

  /***** blur logic for proxy components *****/

  handleAddClass(style) {
    let productDescription = document.getElementById('productDescription');
    let morelooks = document.getElementById('morelooks');
    let reviews = document.getElementById('reviews');

    if (productDescription) {
      productDescription.classList.add(style);
    }

    if (morelooks) {
      morelooks.classList.add(style);
    }

    if (reviews) {
      reviews.classList.add(style);
    }
  }

  handleRemoveClass() {
    let productDescription = document.getElementById('productDescription');
    let morelooks = document.getElementById('morelooks');
    let reviews = document.getElementById('reviews');

    if (productDescription && productDescription.className) {
      productDescription.classList.remove(productDescription.className);
    }

    if (morelooks && morelooks.className) {
      morelooks.classList.remove(morelooks.className);
    }

    if (reviews && reviews.className) {
      reviews.classList.remove(reviews.className);
    }
  }

  render() {
    return (
      <div className={style.navbar}>

        {/* assets and components located above the nav-bar */}
        <div className={style.topComp}>
          <div className={style.logo}>
            <Logo />
            <div className={style.components}>
              <span className={style.rightComp}>
                <Search handleMouseOver={this.handleMouseOver} />
              </span>
              <span className={style.rightComp}>
                <Login
                  handleMouseOver={this.handleMouseOver}
                  handleMouseOut={this.handleMouseOut} />
              </span>
              <span className={style.rightComp}>
                <Cart
                  handleMouseOver={this.handleMouseOver}
                  handleMouseOut={this.handleMouseOut} />
              </span>
            </div>
          </div>
        </div>

        {/* search conditional render */}
        {
          this.state.searchHover ?
            <div className={style.searchBoxDiv}>

              {/* search input form */}
              <form className={style.searchBoxForm}>
                <input type="text" placeholder="What can we help you find?" onKeyUp={this.handleSearchResults} />
                <a href="#" onClick={() => this.handleMouseOut('searchHover')}>
                  <svg height="12" width="12" className={style.searchExit} transform="translate(-20,-28)">
                    <path d="M2 2l8 8m0-8l-8 8"></path>
                  </svg>
                </a>
              </form>

              {/* collective search results conditional render */}
              <ul className={style.searchResults}>
                {this.state.results.map((result, index) => <SearchResults key={index} index={index} result={result} search={this.state.search} handleMouseOver={this.handleMouseOver} />)}
              </ul>

              {/* additional assets i.e. images render */}
              {
                this.state.results.length ?
                <div>
                  <div className={style.featuredResult}>
                    <span>
                      <strong>Featured results for "{this.state.results[this.state.resultHoverIdx].keyword}"</strong>
                    </span>
                  </div>
                  <div className={style.imgResultDiv}>
                    <ul>
                      {
                        this.state.results[this.state.resultHoverIdx].products.map((product, index) =>
                        <li key={index} onMouseEnter={() => this.handleMouseOver(index)} onMouseOut={() => this.handleMouseOut(index)}>
                          {
                            (this.state[index] && product.images.length > 1) ? <img className={style.imgResult} src={product.images[1].imageUrl} /> 
                            : <img className={style.imgResult} src={product.images[0].imageUrl} />
                          }
                        </li>)
                      }
                    </ul>
                  </div>
                </div> : ''
              }
            </div> : ''
        }

        {/* account conditional render */}
        {
          this.state.accountHover ?
            <div className={style.accountDiv}>
              <ul>
                <li><button className={style.accountSignBtn}>Sign In</button></li>
                <li>Your Account</li>
                <li>Wish List</li>
                <li>Set Your Store</li>
              </ul>
            </div> : ''
        }

        {/* cart conditional render */}
        {
          this.state.cartHover ?
            <div className={style.cartDiv}>
              <div className={style.cartDivInt}>
                <span><u>Sign in</u> to see what you may have added before.</span>
              </div>
            </div> : ''
        }

        {/* nav-bar component */}
        <Departments
          departments={this.state.departments}
          categories={this.state.categories}
          hover={this.state.hover}
          getCategories={this.getCategories}
          handleMouseOver={this.handleMouseOver}
          handleMouseOut={this.handleMouseOut}
          handleAddClass={this.handleAddClass}
          handleRemoveClass={this.handleRemoveClass} />
          
      </div>
    )
  }
}

export default NavBar;