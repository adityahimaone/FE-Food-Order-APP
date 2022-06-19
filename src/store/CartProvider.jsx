import React, { useReducer } from "react";
import CartContext from "./cart-context";

// inital for useReducer
const initialCartState = {
  items: [],
  totalAmount: 0,
};

//function like inside of reducer Actions
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // caoncat is like push but it adds to the end of the array

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // ultility findIndex is like indexOf but it returns the index of the first element that satisfies the provided testing function.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // if the item is already in the cart, then update the amount
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    // if the item is already in the cart, then update the amount
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      // update the items array
      updatedItems = [...state.items];
      // replace the item at the index with the updated item
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // if the item is not in the cart, then add it
      updatedItems = { ...action.item };
      // add the item to the items array
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
  }
  return initialCartState;
};

function CartProvider({ children }) {
  // state value & dispatch function
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemToCartHandler = (item) => {
    // call dispatchCartAction with action
    dispatchCartAction({
      type: "ADD_ITEM",
      item: item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
