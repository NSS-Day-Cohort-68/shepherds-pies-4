import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { AdminNav } from "../components/nav/AdminNav.js";
import { Welcome } from "../components/Welcome/Welcome.js";
import { AdminOrderList } from "../components/Orders/AdminOrderList.js";
import { OrderDetails } from "../components/Orders/OrderDetails.js";
import { CreateOrder } from "../components/Orders/CreateOrder.js";
import { Login } from "../components/Login/Login.js";
import { EmployeeList } from "../components/employees/EmployeeList.js";
import { EmployeeDetails } from "../components/employees/EmployeeDetails.js";
import { EditEmployeeForm } from "../components/forms/EditEmployeeForm.js";

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
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId">
            <Route index element={<EmployeeDetails />} />
            <Route path="employeeEdit" element={<EditEmployeeForm />} /> {""}
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
