import React from "react";

import "./Burger.css";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  // transform a key/value object into an array of the keys * their value
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    }); // spread to get a new array
  });

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
