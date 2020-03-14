import React, { Component } from 'react';
import axios from '../../../axios-orders';

import './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    // .json is for firebase, to create a new endpoint
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Max',
        address: {
          street: 'Teststreet 1',
          zipCode: '345435',
          country: 'France'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios
      .post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
        this.props.history.push('/');
      })
      .catch(error => { this.setState({ loading: false }); console.log(error) });
  }

  render() {
    let form = (<form>
      <input type='text' name='name' placeholder="Your name" />
      <input type='email' name='email' placeholder="Your email" />
      <input type='text' name='street' placeholder="Street" />
      <input type='text' name='postal' placeholder="Postal Code" />
      <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
    </form>);
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;