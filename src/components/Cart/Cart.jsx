import React, { useContext } from "react";
import Modal from "../UI/Modal";
import Style from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart({ onCloseCart }) {
  const cartCtx = useContext(CartContext);

  // const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items?.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <Modal onClose={onCloseCart}>
      <ul className={Style["cart-items"]}>
        {cartCtx?.items?.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            // bind the remove handler to the item id
            // how bind works in javascript:
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
      <div className={Style.total}>
        <span>Total</span>
        <span>{totalAmount}</span>
      </div>
      <div className={Style.actions}>
        <button onClick={onCloseCart} className={Style["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={Style.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
