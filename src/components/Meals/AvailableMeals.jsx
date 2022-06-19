import React from "react";
import Style from "./AvailableMeals.module.css";
import DUMMY_MEALS from "../../dummy-data";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  return (
    <section className={Style.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((item) => (
            <MealItem key={item.id} {...item} />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
