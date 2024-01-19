import React, { useEffect, useState } from "react";
import { getAllToppings } from "../../Services/pizzaServices.js";

export const Pizza = ({ pizza, getNumToppings }) => {
  const [pizzaToppings, setPizzaToppings] = useState([]);
  const [pizzaCost, setPizzaCost] = useState(0);

  useEffect(() => {
    getAllToppings().then((toppingsArray) => {
      const toppingsForPizza = toppingsArray.filter(
        (topping) => topping.pizzaId === pizza.id
      );
      setPizzaToppings(toppingsForPizza);
    });
  }, [pizza.id]);

  useEffect(() => {
    getNumToppings(pizzaToppings.length);
  }, [pizzaToppings]);

  const cost = pizza.size.cost + pizzaToppings.length * 0.5;

  return (
    <section className="order">
      <header className="order-info">Pizza #: {pizza.id}</header>
      <div>Size: {pizza.size.size}</div>
      <div>Sauce: {pizza.sauce.sauce}</div>
      <div>Cheese: {pizza.cheese.cheese}</div>
      <div>
        Toppings:{" "}
        {pizzaToppings.map((pTopping) => pTopping.topping.name).join(", ")}{" "}
      </div>
      <div>Total Cost: ${cost} </div>
      <div>
        <button className="btn btn-success">Edit Pizza</button>
      </div>
      <div>
        <button className="btn btn-danger">Remove Pizza</button>
      </div>
    </section>
  );
};
