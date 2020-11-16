import React from "react";

import Categories from "./components/Categories";
import Escalator from "./components/Escalator";
import Growth from "./components/Growth";

import "./Global/global.css";

function App() {
  return (
    <div className="App">
      <Escalator />
      <Categories />
      <Growth />
    </div>
  );
}

export default App;
