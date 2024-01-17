import "./App.css";
import { Welcome } from "./components/Welcome/Welcome.js";
import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import { EmployeeNav } from "./components/nav/EmployeeNav.js";
import { OrderList } from "./components/Orders/OrderList.js";

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
      />
      <Route index element={<Welcome />} />
      <Route path="orders" element={<OrderList />} />
    </Routes>
  );
};

export default App;
