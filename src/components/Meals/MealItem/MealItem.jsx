import React, { useContext } from "react";
import Style from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem({ name, description, price, id }) {
  // call the context to get the cart state
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    // call the context function to add item to cart
    cartCtx.addItem({ id, name, price, amount });
  };
  return (
    <li className={Style.meal}>
      <div>
        <h3>{name}</h3>
        <div className={Style.description}>{description}</div>
        <div className={Style.price}>{`$${price ? price?.toFixed(2) : 0}`}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
