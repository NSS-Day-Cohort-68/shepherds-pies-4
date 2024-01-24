import React, { useEffect, useState } from "react";
import { getAllOrders } from "../../Services/orderServices.js";
import { Link } from "react-router-dom";
import { Order } from "../Orders/Order.js";
import { SalesMonthDropdown } from "./SalesMonthDropdown.js";
import "./Sales.css";

export const SalesReport = () => {
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
    <div className="sales-container">
      <h2 className="text-light">Sales Report</h2>
      <div>
        <SalesMonthDropdown />
      </div>
      <section className="sales-box">
        <article className="orders text-light sales-orders">
          {allOrders.map((orderObj) => (
            <Link key={orderObj.id} to={`/adminOrders/${orderObj.id}`}>
              <Order order={orderObj} key={orderObj.id} />
            </Link>
          ))}
        </article>
        <article className="sidebar-container">
          <section className="total-sales-container">
            <h4>🍅🍕Total Sales Amount🍕🍅</h4>
            <h6 className="sales-item">$1,000,000,000</h6>
          </section>
          <section className="popular-items-container">
            <h4>🍅🍕Popular Items🍕🍅</h4>
            <h6 className="popular-item">Most Popular Size: xyz</h6>
            <h6 className="popular-item">Most Popular Cheese: xyz</h6>
            <h6 className="popular-item">Most Popular Sauce: xyz</h6>
            <h6 className="popular-item">Top Three Toppings: xyz</h6>
          </section>
        </article>
      </section>
    </div>
  );
};

// need dropdown to work
//need cost on each order then add what has been filtered?

// Sales report - An admin should be able to view the orders for a
//specific month, and get the total sales amount for that month

// Sales report - Additionally, the sales report should show the
//most popular items - display the most popular size, cheese, sauce,
// and the top three toppings for that month.
