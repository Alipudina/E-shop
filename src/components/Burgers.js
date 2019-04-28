import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { burgersInfo } from '../config/info';
import { change, increment, decrement, addToOrder } from '../Redux/redux'
import { connect } from 'react-redux';

class Burgers extends Component {
  render() {
    return (
      <>
        <h2 className="title mb-4">Our Burgers are Delicious!</h2>
        {burgersInfo.map((burger, index) => {
            return (
              <div className="container" key={index}>
                <h4 className="title" identifier={burger.productName}>{burger.productName}</h4>
                <button onClick={this.props.decrement} identity={index}>-</button>
                <input type="text" onChange={this.props.changeValue} identity={index} value={this.props['inputValue'+index]}/>
                <button onClick={this.props.increment} identity={index}>+</button>
                <br />
                <div className="mt-3">
                  <button className="btn btn-success" onClick={this.props.addToOrder} buttoncounter={index} product={burger.productName} price={burger.price}>Add to Order</button><span><strong>&nbsp;{burger.price}€</strong></span>
                </div>
                <hr />
              </div>
            )
          })
        }
        <NavLink to="/products">Go to Products Page</NavLink>
      </>
    )
  }
}

const mapStateToProps= state => {
  return {
    inputValue0: state.pizzaValues[0],
    inputValue1: state.pizzaValues[1],
    inputValue2: state.pizzaValues[2]
  }
}

const mapDispatchToProps= dispatch => {
  return {
    changeValue: ev => dispatch(change(ev)),
    increment: ev => dispatch(increment(ev)),
    decrement: ev => dispatch(decrement(ev)),
    addToOrder: ev => dispatch(addToOrder(ev))
  }
}

export const BurgersContainer= connect(mapStateToProps, mapDispatchToProps)(Burgers);
