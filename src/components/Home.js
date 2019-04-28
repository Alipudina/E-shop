import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <>
        <h3 className="title">This is the HomePage</h3>
        <NavLink className="btn btn-primary btn-lg" to="/products">See Products</NavLink>
      </>
    )
  }
}
