import "./App.css";
import { Welcome } from "./components/Welcome/Welcome.js";
import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import { EmployeeNav } from "./components/nav/EmployeeNav.js";
import { OrderList } from "./components/Orders/OrderList.js";
import { OrderDetails } from "./components/Orders/OrderDetails.js";
import { CreateOrder } from "./components/Orders/CreateOrder.js";
import { EmployeeList } from "./components/employees/EmployeeList.js";
import { EmployeeDetails } from "./components/employees/EmployeeDetails.js";
import { EditEmployeeForm } from "./components/forms/EditEmployeeForm.js";

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
        <Route path="createOrder" element={<CreateOrder />} />
        <Route path="createPizza" />
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

export default App;
