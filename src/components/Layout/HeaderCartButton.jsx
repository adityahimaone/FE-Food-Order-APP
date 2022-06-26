import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import Style from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

function HeaderCartButton({ onClick }) {
  const cartCtx = useContext(CartContext);

  // destructuring the cart items
  const { items } = cartCtx;

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const numberOfCartItems = items?.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${Style.button} ${btnIsHighlighted ? Style.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    // if the cart is empty, remove the highlight
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // clean up the timer when the component is unmounted
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={Style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Style.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
