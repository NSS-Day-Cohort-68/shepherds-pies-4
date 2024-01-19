import React from "react";

export const OrderFilterBar = () => {
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Filter by...
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">
            Most Recent
          </a>
          <a className="dropdown-item" href="#">
            Oldest First...
          </a>
        </div>
      </div>
    </div>
  );
};
