import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Orders.css";
import { getOrderByOrderId } from "../../Services/orderServices.js";
import { PizzaList } from "../Pizzas/PizzaList.js";
// import { OrderCostTable } from "./OrderCostTable.js";

export const OrderDetails = () => {
  const [order, setOrder] = useState({});
  const { orderId } = useParams();
  const [baseOrderCost, setBaseOrderCost] = useState(0);

  useEffect(() => {
    getOrderByOrderId(orderId).then((data) => {
      const orderObj = data[0];
      setOrder(orderObj);
    });
  }, [orderId]);

  useEffect(() => {
    if (order.id) {
      setBaseOrderCost(order.delivery ? 5 + order.tip : order.tip);
      console.log(baseOrderCost);
    }
  }, [order]);
  return baseOrderCost !== 0 ? (
    <section className="order-details text-light">
      <header>Delivery # {order.id}</header>

      <div>
        <span></span>
        <PizzaList baseOrderCost={parseInt(baseOrderCost)} />
      </div>
      <div></div>
      <div>
        <button className="btn btn-success">Edit Order</button>
      </div>
      <div>
        <button className="btn btn-danger">Delete Order</button>
      </div>
    </section>
  ) : (
    <></>
  );
  //   } else {
  //     return (
  //       <section className="order-details text-light">
  //         <header>Dine-in # {order.id}</header>
  //         <div>
  //           <span></span>
  //           <PizzaList />
  //         </div>
  //         <div>
  //           <span>Cost Table</span>
  //           <OrderCostTable />
  //         </div>
  //         <div>
  //           <button className="btn btn-success">Edit Order</button>
  //         </div>
  //         <div>
  //           <button className="btn btn-danger">Delete Order</button>
  //         </div>
  //       </section>
  //     );
  //   }
};
