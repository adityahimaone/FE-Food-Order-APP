import React from "react";
import Modal from "../UI/Modal";
import Style from "./Cart.module.css";

function Cart() {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];
  return (
    <Modal>
      <ul className={Style["cart-items"]}>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={Style.total}>
        <span>Total</span>
        <span>35.62</span>
      </div>
      <div className={Style.actions}>
        <button className={Style["button--alt"]}>Close</button>
        <button className={Style.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
