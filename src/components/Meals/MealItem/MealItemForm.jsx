import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import Style from "./MealItemForm.module.css";

function MealItemForm({ id, onAddToCart }) {
  const amountInputRef = useRef();

  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    // get the amount value from the input
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = parseInt(enteredAmount);

    // check if the amount is valid
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount <= 0 ||
      enteredAmount > 5
    ) {
      // set the state to false
      setAmountIsValid(false);
      return;
    }

    // add the item to the cart from props
    onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={Style.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          type: "number",
          id: "amount_" + id, // this changed!
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <label>Please enter a valid amount (1 - 5).</label>}
    </form>
  );
}

export default MealItemForm;
