import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllOrders } from "../../Services/orderServices.js";
import { Order } from "./Order.js";
import "./Orders.css";

export const OrderList = () => {
  const [allOrders, setAllOrders] = useState([]);

  const getAndSetOrders = () => {
    getAllOrders().then((ordersArray) => {
      setAllOrders(ordersArray);
    });
  };

  useEffect(() => {
    getAndSetOrders();
  }, []);

  return (
    <div className="orders-container ">
      <h2 className="text-light">Orders</h2>
      <article className="orders text-light">
        {allOrders.map((orderObj) => {
          return (
            <Order
              getAndSetOrders={getAndSetOrders}
              order={orderObj}
              key={orderObj.id}
            />
          );
        })}
      </article>
    </div>
  );
};
