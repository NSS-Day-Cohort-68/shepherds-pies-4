import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllOrders } from "../../Services/orderServices.js";
import { Order } from "./Order.js";
import "./Orders.css";
import { Link } from "react-router-dom";
import { OrderFilterBar } from "./OrderFilterBar.js";

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
      <div>
        <OrderFilterBar />
      </div>
      <article className="orders text-light">
        {allOrders.map((orderObj) => {
          return (
            <Link key={orderObj.id} to={`/orders/${orderObj.id}`}>
              <Order
                getAndSetOrders={getAndSetOrders}
                order={orderObj}
                key={orderObj.id}
              />
            </Link>
          );
        })}
      </article>
    </div>
  );
};
