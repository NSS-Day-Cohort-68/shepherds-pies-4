import React from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";

export const EmployeeNav = () => {
  // const navigate = useNavigate();
  return (
    <ul className="navbar">
      <li className="navbar-item text-primary">
        <Link className="navbar-link" to="/create">
          Create Order!
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/orders">
          All Orders
        </Link>
      </li>
      {/* {localStorage.getItem("pizza_user") ? ( */}
      <li className="navbar-item navbar-logout">
        <Link
          className="navbar-link"
          to="/logIn"
          //   onClick={() => {
          //     localStorage.removeItem("pizza_user");
          //     navigate("/", { replace: true });
          //   }
          // }
        >
          Logout
        </Link>
      </li>
      {/* ) : (
        ""
      )
      } */}
    </ul>
  );
};
