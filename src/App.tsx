import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [cartItemQuantity, setCartItemQuantity] = useState<any>([]);
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
        <Navbar cartItemQuantity={cartItemQuantity} />
        <Routes>
          <Route
            path="/"
            element={
              <HomeScreen changeCartItemQuantity={changeCartItemQuantity} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
