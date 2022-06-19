import React from "react";
import Input from "../../UI/Input";
import Style from "./MealItemForm.module.css";

function MealItemForm({ id }) {
  return (
    <form className={Style.form}>
      <Input
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
    </form>
  );
}

export default MealItemForm;
