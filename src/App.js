import "./App.css";
import { Welcome } from "./components/Welcome/Welcome.js";
import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import { EmployeeNav } from "./components/nav/EmployeeNav.js";
import { OrderList } from "./components/Orders/OrderList.js";
import { CreateOrder } from "./components/Orders/CreateOrder.js";
import { EmployeeList } from "./components/employees/EmployeeList.js";

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
        <Route path="orders" element={<OrderList />} />
        <Route path="createOrder" element={<CreateOrder />} />
        <Route path="createPizza" />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="employeeDetails" />
      </Route>
    </Routes>
  );
};

export default App;
