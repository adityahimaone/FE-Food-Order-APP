import React from "react";
import Style from "./Input.module.css";

function Input({ label, input }) {
  return (
    <div className={Style.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
}

export default Input;
