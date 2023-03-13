import { useState } from "react";
import Result from "./components/resultSection/Results";
import Summary from "./components/summarySection/Summary";
import "./main.css";

function App() {
  return (
    <div className="App">
      <Result />
      <Summary />
    </div>
  );
}

export default App;
