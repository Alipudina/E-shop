import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { saladsInfo } from '../config/info';
import {change, decrement, increment, addToOrder} from '../Redux/redux';
import { connect } from 'react-redux';

class Salads extends Component {
  render() {
    return (
      <>
        <h2 className="title mb-4">Choose our salads for a more healthy life!</h2>
        {saladsInfo.map((salad, index) => {
            return (
              <div className="container" key={index}>
                <h4 className="title mb-2" identifier={salad.productName}>{salad.productName}</h4>
                <button onClick={this.props.decrement} identity={index}>-</button>
                <input type="text" onChange={this.props.changeValue} identity={index} value={this.props['inputValue'+ index]}/>
                <button onClick={this.props.increment} identity={index}>+</button>
                <br />
                <div className="mt-3">
                <button className="btn btn-success" onClick={this.props.addToOrder} buttoncounter={index} product={salad.productName} price={salad.price}>Add to Order</button>
                <span><strong>&nbsp;{salad.price}€</strong></span>
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
    decrement: ev => dispatch(decrement(ev)),
    increment: ev => dispatch(increment(ev)),
    addToOrder: ev => dispatch(addToOrder(ev))
  }
}

export const SaladsContainer=connect(mapStateToProps, mapDispatchToProps)(Salads);
