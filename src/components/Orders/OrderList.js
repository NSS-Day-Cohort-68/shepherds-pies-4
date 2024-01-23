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
  const [sortedOrders, setSortedOrders] = useState([]);
  const [sortOrder, setSortOrder] = useState("oldest");

  const getAndSetOrders = () => {
    getAllOrders().then((ordersArray) => {
      setAllOrders(ordersArray);
      sortOrders(ordersArray, sortOrder);
    });
  };

  const sortOrders = (orders, order) => {
    const sortedOrders =
      order === "oldest"
        ? [...orders].sort(
            (a, b) => new Date(a.datePlaced) - new Date(b.datePlaced)
          )
        : [...orders].sort(
            (a, b) => new Date(b.datePlaced) - new Date(a.datePlaced)
          );

    setSortedOrders(sortedOrders);
  };

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  useEffect(() => {
    getAndSetOrders();
  }, []);

  useEffect(() => {
    sortOrders(allOrders, sortOrder);
  }, [allOrders, sortOrder]);

  return (
    <div className="orders-container ">
      <h2 className="text-light">Orders</h2>
      <div>
        <OrderFilterBar handleSortChange={handleSortChange} />
      </div>
      <article className="orders text-light">
        {sortedOrders.map((orderObj) => {
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

//   return (
//     <div>
//       <label>Sort By:</label>
//       <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
//         <option value="oldest">Oldest to Newest</option>
//         <option value="newest">Newest to Oldest</option>
//       </select>

//       {data.map(item => (
//         <div key={item.id}>
//       {/* Render your data here */}
//           {/* Render your item content */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default YourComponent;
