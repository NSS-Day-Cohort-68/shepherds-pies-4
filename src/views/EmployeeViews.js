import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { EmployeeNav } from "../components/nav/EmployeeNav.js";
import { Welcome } from "../components/Welcome/Welcome.js";
import { OrderList } from "../components/Orders/OrderList.js";
import { OrderDetails } from "../components/Orders/OrderDetails.js";
import { CreateOrder } from "../components/Orders/CreateOrder.js";
import { Login } from "../components/Login/Login.js";
import { EmployeeList } from "../components/employees/EmployeeList.js";

export const EmployeeViews = () => {
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
        </Route>{" "}
        <Route path="createOrder" element={<CreateOrder />} />
        <Route path="createPizza" />
        <Route path="logIn" element={<Login />} />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="employeeDetails" />
      </Route>
    </Routes>
  );
};
