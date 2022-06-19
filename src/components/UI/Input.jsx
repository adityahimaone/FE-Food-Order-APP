import React from "react";
import Style from "./Input.module.css";

const Input = React.forwardRef(({ label, input }, ref) => {
  return (
    <div className={Style.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
