import { useEffect, useState } from "react";
import {
  getAllToppings,
  getAllSizes,
  getAllCheeses,
  getAllSauces,
  savePizza,
} from "../../Services/pizzaServices.js";

export const CreatePizza = () => {
  const [pizzaSizeArray, setPizzaSizeArray] = useState([]);
  const [cheeseArray, setCheeseArray] = useState([]);
  const [sauceArray, setSauceArray] = useState([]);
  const [toppingsArray, setToppingsArray] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCheese, setSelectedCheese] = useState("");
  const [selectedSauce, setSelectedSauce] = useState("");
  const [newOrderId, setNewOrderId] = useState(undefined);
  const [currentPizza, setCurrentPizza] = useState({});
  const [editOrderId, setEditOrderId] = useState("");
  const [orderId, setOrderId] = useState(undefined);
  const [pizzaId, setPizzaId] = useState("");

  const addPizza = () => {
    if (pizzaId === undefined && orderId === undefined) {
      const createNewPizza = {
        sizeId: selectedSize,
        cheeseId: selectedCheese,
        sauceId: selectedSauce,
        orderId: newOrderId,
      };
      savePizza(createNewPizza).then((res) => {
        setCurrentPizza(res);
      });
    } else if (pizzaId === undefined && orderId !== undefined) {
      setEditOrderId(editOrderId);
      const createPizzaObject = {
        sizeId: selectedSize,
        cheeseId: selectedCheese,
        sauceId: selectedSauce,
        orderId: editOrderId,
      };
      savePizza(createPizzaObject).then((res) => {
        setCurrentPizza(res);
      });
    }
  };

  const handleToppingChange = (toppingId) => {
    setToppingsArray((prevToppings) => {
      if (prevToppings.includes(toppingId)) {
        return prevToppings.filter((id) => id !== toppingId);
      } else {
        return [...prevToppings, toppingId];
      }
    });
  };

  const handleSaveEditClick = async (event) => {
    event.preventDefault();

    if (!selectedSize || !selectedCheese || !selectedSauce) {
      console.error("Please select size, cheese, and sauce");

      return;
    }

    const pizzaObject = {
      sizeId: selectedSize,
      cheeseId: selectedCheese,
      sauceId: selectedSauce,
      orderId: orderId !== undefined ? editOrderId : newOrderId,
    };

    const savedPizza = await savePizza(pizzaObject);

    console.log("Pizza added to order successfully!", savedPizza);

    setSelectedSize("");
    setSelectedCheese("");
    setSelectedSauce("");
    setToppingsArray([]);
  };

  useEffect(() => {
    getAllSizes().then((res) => {
      setPizzaSizeArray(res);
    });
  }, []);

  useEffect(() => {
    getAllCheeses().then((res) => {
      setCheeseArray(res);
    });
  }, []);

  useEffect(() => {
    getAllSauces().then((res) => {
      setSauceArray(res);
    });
  }, []);

  useEffect(() => {
    getAllToppings().then((res) => {
      setToppingsArray(res);
    });
  }, []);

  return (
    <form>
      <h2>Create Pizza</h2>
      <fieldset>
        <div className="form-group">
          <label>Size</label>
          <select
            onChange={(event) => {
              setSelectedSize(event.target.value);
            }}
            name="sizes"
          >
            {pizzaSizeArray.map((size) => (
              <option key={size.id} value={size.id}>
                {size.size}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Cheese</label>
          <select
            onChange={(event) => {
              setSelectedCheese([event.target.value]);
            }}
            name="cheeses"
          >
            {cheeseArray.map((cheese) => (
              <option key={cheese.id} value={cheese.id}>
                {cheese.cheese}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Sauce</label>
          <select
            onChange={(event) => {
              setSelectedSauce([event.target.value]);
            }}
            name="sauces"
          >
            {sauceArray.map((sauce) => (
              <option key={sauce.id} value={sauce.id}>
                {sauce.sauce}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Select Toppings</label>
          {toppingsArray.map((topping) => (
            <div key={topping.id} className="topping-option">
              <input
                type="checkbox"
                name="topping"
                value={topping.id}
                checked={toppingsArray.includes(topping.id)}
                onChange={() => {
                  handleToppingChange(topping.id);
                }}
              />
              <label htmlFor={`topping${topping.id}`}>{topping.name}</label>
            </div>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="add-button" onClick={handleSaveEditClick}>
            Add to Order
          </button>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="checkout-button" onClick={handleSaveEditClick}>
            Checkout!
          </button>
        </div>
      </fieldset>
    </form>
  );
};

// Toppings displays a brand new one at bottom after you click on one. Fix

// state is making a copy
