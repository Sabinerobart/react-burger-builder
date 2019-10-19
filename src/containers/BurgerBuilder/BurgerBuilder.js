import React, { Component } from "react";

import Aux from "../../hoc/Aux";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}; // global constants in capital letters

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    price: 4
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    console.log(oldCount);
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }; // create new state because state should always be immutable

    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.price;
    const newPrice = oldPrice + priceAddition;
    this.setState({ price: newPrice, ingredients: updatedIngredients });
  };

  // addIngredientHandler = type => {};

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
