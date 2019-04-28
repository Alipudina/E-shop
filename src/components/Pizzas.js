import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { pizzasInfo } from '../config/info';
import { connect } from 'react-redux';
import { change, increment, addToOrder,decrement } from '../Redux/redux';

class Pizzas extends Component {
  render() {
    return (
      <>
        <h2 className="title mb-4">Choose one of these lovely Pizzas!</h2>
        {pizzasInfo.map((pizza, index) => {
            return (
              <div className="container" key={index}>
                <h4 className="title">{pizza.productName}</h4>
                <button onClick={this.props.decrement} identity={index}>-</button>
                <input type="number" onChange={this.props.changeValue} identity={index} value={this.props['pizzaValue'+index]}/>
                <button onClick={this.props.increment} identity={index}>+</button>
                <br />
                <div className="mt-3">
                  <button buttoncounter={index} product={pizza.productName} price={pizza.price} className="btn btn-success" onClick={this.props.addToOrder}>Add to Order</button><span><strong>&nbsp;{pizza.price}€</strong></span>
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

const mapStateToProps = state => {
  return {
    pizzaValue0: state.pizzaValues[0],
    pizzaValue1: state.pizzaValues[1],
    pizzaValue2: state.pizzaValues[2]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeValue: ev => dispatch(change(ev)),
    increment: ev => dispatch(increment(ev)),
    addToOrder: ev => dispatch(addToOrder(ev)),
    decrement: ev => dispatch(decrement(ev))
  }
}

export const PizzaContainer = connect(mapStateToProps, mapDispatchToProps)(Pizzas)
