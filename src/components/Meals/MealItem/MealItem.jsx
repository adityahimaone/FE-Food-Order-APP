import React from "react";
import Style from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem({ name, description, price, id }) {
  return (
    <li className={Style.meal}>
      <div>
        <h3>{name}</h3>
        <div className={Style.description}>{description}</div>
        <div className={Style.price}>{`$${price ? price?.toFixed(2) : 0}`}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
}

export default MealItem;
