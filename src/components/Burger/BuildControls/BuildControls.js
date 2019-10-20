import React from "react";

import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => (
  <section className="BuildControls">
    <p>
      Current Price : <strong>{props.price.toFixed(2)} €</strong>
    </p>
    {controls.map((control, key) => {
      return (
        <BuildControl
          key={key}
          label={control.label}
          added={() => props.ingredientAdded(control.type)} // access each ingredient type and pass it as argument
          removed={() => props.ingredientRemoved(control.type)}
          disabled={props.disabled[control.type]}
        />
      );
    })}
  </section>
);

export default BuildControls;
