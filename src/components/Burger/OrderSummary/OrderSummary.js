import React, { Component } from "react";

import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  // Could be a functional component, transformed into a class to test lifecycles - links to the Modal component
  componentWillUpdate() {
    console.log("OrderSummary will update")
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((igKey, i) => {
      return (
        <li key={i}>
          <span style={{ textTransform: "capitalize" }}>
            {igKey}: {this.props.ingredients[igKey]}
          </span>
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients :</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total price : {this.props.price.toFixed(2)} €</strong>
        </p>
        <p>Continue to checkout ?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
      </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
      </Button>
      </Aux>
    );
  }
};

export default OrderSummary;
