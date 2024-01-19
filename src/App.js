import "./App.css";
import { Welcome } from "./components/Welcome/Welcome.js";
import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import { EmployeeNav } from "./components/nav/EmployeeNav.js";
import { OrderList } from "./components/Orders/OrderList.js";
import { OrderDetails } from "./components/Orders/OrderDetails.js";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <EmployeeNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="orders">
          <Route index element={<OrderList />} />
          <Route path=":orderId" element={<OrderDetails />} /> {""}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
