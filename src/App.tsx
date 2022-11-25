import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [cartItemQuantity, setCartItemQuantity] = useState<any>([]);
  const [showRestaurant, setShowRestaurant] = useState<boolean>(false);
  function displayRestaurant(file: string) {
    if (file === "nav") {
      setShowRestaurant(false);
      return;
    }
    setShowRestaurant(true);
  }
  function changeCartItemQuantity(dishId: number, quantity: number) {
    if (cartItemQuantity) {
      let items = [...cartItemQuantity, dishId];
      if (dishId === null) items = [];
      if (items.indexOf(dishId) !== items.lastIndexOf(dishId)) items.pop();
      if (quantity === 0) items.splice(items.indexOf(dishId), 1);
      setCartItemQuantity(items);
    }
  }
  return (
    <div className="mt-14">
      <Router>
        <Navbar
          showRestaurant={showRestaurant}
          displayRestaurant={displayRestaurant}
          cartItemQuantity={cartItemQuantity}
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomeScreen
                displayRestaurant={displayRestaurant}
                showRestaurant={showRestaurant}
                changeCartItemQuantity={changeCartItemQuantity}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
