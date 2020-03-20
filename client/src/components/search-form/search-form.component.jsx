import React, { Component } from 'react';
import axios from 'axios';
import SearchResults from './search-results';

import './search-form.styles.scss';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      results: [],
      resultHoverIdx: 0
    }

    this.handleSearchResults = this.handleSearchResults.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut =  this.handleMouseOut.bind(this);
  }

  handleSearchResults(e) {
    if (e.target.value) {
      this.setState({ search: e.target.value }, () =>
        axios
          .get(`/navbar/search/${this.state.search}`)
          .then(({ data }) => this.setState({ results: data }, () => console.log(this.state)))
          .catch(err => console.log(err)))
    } else {
      this.setState({
        search: '',
        results: []
      })
    }
  }

  handleMouseOver(stateName, idx) {
    // if statement is to catch search result related logic
    if (stateName === 'resultHoverIdx') {
      this.setState({ [stateName]: idx })
    } else {
      this.setState({ [stateName]: true })
    }
  }

  handleMouseOut(idx) {
    this.setState({ [idx]: false })
  }

  render() {
    return (
      <div styleName={`search-form ${this.props.search.show ? 'show' : ''}`}>
        <div styleName='box'>
          <div styleName='box-arrow' />
        </div>
        <div styleName='search-box'>
          <div styleName='search-box-item'>
            <input type='text' placeholder='What can we help you find?' value={this.state.search} onChange={this.handleSearchResults}/>
          </div>
          <div styleName='search-box-item'>
            <div styleName='item-clear'>
              {
                this.state.search ? <span onClick={() => this.setState({ search: '', results: [] })}>Clear</span> : ''
              }
            </div>
            <div styleName='item-clear' onClick={() => this.props.handleSearch(true)}>
              <svg height='10' width='10' styleName='search-close'>
                <path d='M2 2l8 8m0-8l-8 8'></path>
              </svg>
            </div>
          </div>
        </div>
        {/* collective search results conditional render */}
        {this.state.results.map((result, index) => 
            <ul styleName='search-result'>
              <SearchResults 
                key={index} 
                index={index} 
                result={result} 
                search={this.state.search}
                handleMouseOver={this.handleMouseOver} 
              />
            </ul>
          )
        }

        {/* additional assets i.e. images render */}
        {
          this.state.results.length ?
          <>
            <span styleName='featured-result'>
              <strong>Featured results for "{this.state.results[this.state.resultHoverIdx].keyword}"</strong>
            </span>
            <ul styleName='img-result'>
              {
                this.state.results[this.state.resultHoverIdx].products.map((product, index) =>
                <li 
                  key={index} 
                  onMouseEnter={() => this.handleMouseOver(index)} 
                  onMouseOut={() => this.handleMouseOut(index)}>
                  {
                    (this.state[index] && product.images.length > 1) ? <img styleName='img-result' src={product.images[1].imageUrl} /> 
                    : <img styleName='img-result' src={product.images[0].imageUrl} />
                  }
                </li>)
              }
            </ul>
          </> 
          : ''
        }
      </div>
    )
  }
};