import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Orders.css';
import Order from '../../components/Order/Order/Order';
import axios from '../../axios-orders';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import * as actions from '../../store/actions/';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map(x => <Order
        key={x.id}
        ingredients={x.ingredients}
        price={x.price}
      />)
    }
    return (
      <div className="Orders">
        {orders}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(Orders, axios));