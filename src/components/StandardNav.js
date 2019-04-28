import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {basketClick} from '../Redux/redux';
import { connect } from 'react-redux';

class StandardNav extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/basket" onClick={this.props.basketClick}>Basket</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

const mapDispatchToProps= dispatch => {
  return {
    basketClick: ev => dispatch(basketClick(ev))
  }
}

export const StandardNavContainer=connect(null, mapDispatchToProps)(StandardNav);
