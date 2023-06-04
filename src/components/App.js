import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isLightMode, setIsLightMode] = useState(false)
  // this will be used for the Dark Mode Toggle feature
  const appClass = isLightMode ? "App dark" : "App light"

  function darkModeToggle() {
    setIsLightMode((isLightMode) => !isLightMode);

  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkModeToggle}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
