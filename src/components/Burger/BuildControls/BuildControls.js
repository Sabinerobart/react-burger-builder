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
    {controls.map((control, key) => {
      return (
        <BuildControl
          key={key}
          label={control.label}
          added={() => props.ingredientAdded(control.type)} // access each ingredient type and pass it as argument
        />
      );
    })}
  </section>
);

export default BuildControls;
