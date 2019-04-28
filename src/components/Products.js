import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import {PizzaContainer} from './Pizzas';
import { SaladsContainer } from './Salads';
import { BurgersContainer } from './Burgers';

class ProductLinks extends Component {
  render() {
    return (
      <ul className="nav nav-tabs justify-content-center mb-3">
        <li className="nav-item">
          <NavLink className="nav-link" to="/products/pizzas">Pizzas</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products/burgers">Burgers</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products/salads">Salads</NavLink>
        </li>
      </ul>
    )
  }
}

class ProductPage extends Component {
  render() {
    return <h2 className="title">This is the all products page</h2>;
  }
}

export default class Products extends Component {
  render() {
    return (
      <>
        <ProductLinks />
        <Route path="/products" exact component={ProductPage} />
        <Route path="/products/pizzas" component={PizzaContainer} />
        <Route path="/products/burgers" component={BurgersContainer}/>
        <Route path="/products/salads" component={SaladsContainer}/>
      </>
    )
  }
}
