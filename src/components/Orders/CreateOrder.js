import { useState } from "react";
import { addNewOrder } from "../../Services/orderServices";
import { Link } from "react-router-dom";

export const CreateOrder = () => {
  const [delivery, setDelivery] = useState(false);
  const [tableId, setTableId] = useState(0);
  const [tip, setTip] = useState(0);

  const handleCreateOrderClick = () => {
    const orderObj = {
      delivery: delivery,
      tip: tip,
      tableId: tableId,
      datePlaced: new Date(),
      userId: 0,
    };
    addNewOrder(orderObj);
  };

  return (
    <div className="create-container">
      <h1>Create Order</h1>
      <div className="delivery">
        <h3>Delivery?</h3>
        <label htmlFor="yes">
          Yes
          <br />
          <input
            id="yes"
            type="radio"
            name="delivery"
            value="true"
            onChange={() => {
              setDelivery(true);
            }}
          />
        </label>
        <label htmlFor="no">
          No
          <br />
          <input
            id="no"
            type="radio"
            name="delivery"
            value="false"
            onChange={() => {
              setDelivery(false);
            }}
          />
        </label>
      </div>
      <div className="tables-container">
        <h3>Table Id:</h3>
        <select
          id="tables"
          onChange={(event) => {
            setTableId(parseInt(event.target.value));
          }}
        >
          <option value="0">Choose table id </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="tips-container">
        <h3>Tip:</h3>
        <input
          id="tips"
          type="number"
          name="tip"
          placeholder="Input Tip Amount"
          onChange={(event) => {
            setTip(parseInt(event.target.value));
          }}
        />
      </div>
      <div className="btn-container">
        <Link to="/createPizza">
          <button onClick={handleCreateOrderClick}>Create Order</button>
        </Link>
      </div>
    </div>
  );
};
