import "./App.css";
import { Welcome } from "./components/Welcome/Welcome.js";
import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import { EmployeeNav } from "./components/nav/EmployeeNav.js";
import { OrderList } from "./components/Orders/OrderList.js";
import { OrderDetails } from "./components/Orders/OrderDetails.js";
import { CreateOrder } from "./components/Orders/CreateOrder.js";
import { EmployeeList } from "./components/employees/EmployeeList.js";
import { Login } from "./components/Login/Login.js";
import { AdminNav } from "./components/nav/AdminNav.js";
import { ApplicationViews } from "./views/ApplicationViews.js";
import { Authorized } from "./views/Authorized.js";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
};

export default App;
