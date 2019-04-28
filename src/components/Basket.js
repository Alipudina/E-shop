import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {toSubmit, handelDelete} from '../Redux/redux';

class Basket extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {orderSubmitted: false};
  //   this.submitOrder = this.submitOrder.bind(this);
  // }
  //
  // submitOrder(ev) {
  //   this.setState({orderSubmitted: true});
  // }
  //
  // componentWillUnmount() {
  //   this.setState({orderSubmitted: false});
  // }
  render() {
    return (
      <>
        {this.props.readyBasket.map((elem, index) => {
          return (
            <div className="container my-4 w-100" key={index}>
              <div className="d-flex justify-content-between w-55 border border-secondary mr-4">
                <h5>You have ordered <b>{elem.quantity}</b> <u>{elem.product}</u> and it costs <b>{elem.quantity*elem.price}€</b></h5>
                <button type="button" className="btn btn-danger" onClick={this.props.handelDelete} deletebutton={index}>Delete</button>
              </div>
              <hr className="h-10"/>
            </div>
          )
        })}

        <div className="container my-4">
          <h5>Total price:<b>&nbsp;{this.props.totalPrice.reduce((a, b) => a+b, 0)}€</b></h5>
          <hr className="h-10"/>
        </div>


        <button className="btn btn-lg btn-primary" onClick={this.props.toSubmit}>Submit order</button>
        {this.props.emptyBasket && <div className="alert alert-danger mt-5 bounceIn" role="alert"> <strong>Oh !!!</strong> Your basket is empty.</div>}
        {this.props.orderSubmitted && <Redirect to="/confirmation" />}
      </>
    )
  }
}

const mapDispatchToProps= dispatch => {
  return {
    toSubmit: ev => dispatch(toSubmit(ev)),
    handelDelete: ev => dispatch(handelDelete(ev))
 }
}

const mapStateToProps = state => {
  return {
    readyBasket: state.basket,
    totalPrice: state.total,
    orderSubmitted: state.orderSubmitted,
    emptyBasket: state.emptyBasket
  };
}

export const BasketContainer = connect(mapStateToProps, mapDispatchToProps)(Basket);
