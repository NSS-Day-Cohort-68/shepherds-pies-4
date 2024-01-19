export const getAllOrders = () => {
  return fetch("http://localhost:8088/orders").then((res) => res.json());
};

export const getOrderByOrderId = (orderId) => {
  return fetch(
    `http://localhost:8088/orders?orderId=${orderId}&_embed=pizzas&_embed=pizzaToppings`
  ).then((res) => res.json());
};
