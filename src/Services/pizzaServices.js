export const getAllPizzas = () => {
  return fetch(
    "http://localhost:8088/pizzas?_expand=sauce&_expand=size&_expand=cheese&_expand=order"
  ).then((res) => res.json());
};

export const getAllToppings = async () => {
  return await fetch(
    "http://localhost:8088/pizzaToppings?_expand=topping&_expand=pizza"
  ).then((res) => res.json());
};

export const deletePizza = (pizzaId) => {
  return fetch(`http://localhost:8088/orders/${pizzaId}`, {
    method: "DELETE",
  });
};
