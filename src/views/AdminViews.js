import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { AdminNav } from "../components/nav/AdminNav.js";
import { Welcome } from "../components/Welcome/Welcome.js";
import { AdminOrderList } from "../components/Orders/AdminOrderList.js";
import { OrderDetails } from "../components/Orders/OrderDetails.js";
import { CreateOrder } from "../components/Orders/CreateOrder.js";
import { Login } from "../components/Login/Login.js";
import { EmployeeList } from "../components/employees/EmployeeList.js";

export const AdminViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <AdminNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="adminOrders">
          <Route index element={<AdminOrderList />} />
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
