import React, { Component } from 'react';

import './Orders.css';
import Order from '../../components/Order/Order/Order';
import axios from '../../axios-orders';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }
  componentDidMount() {
    axios.get('orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(err => {
        this.setState({ loading: false })
      })
  }

  render() {
    return (
      <div className="Orders">
        {this.state.orders.map(x => <Order
          key={x.id}
          ingredients={x.ingredients}
          price={x.price}
        />)}
      </div>
    )
  }
}

export default WithErrorHandler(Orders, axios);