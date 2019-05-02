import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class StandardNav extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/basket">Basket</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
