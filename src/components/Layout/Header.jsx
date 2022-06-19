import React from "react";
import Style from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header({ onShowCart }) {
  return (
    <>
      <header className={Style.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={Style["main-image"]}>
        <img src="/images/meals.jpg" alt="header images" />
      </div>
    </>
  );
}

export default Header;
