import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div class="wrapper">
      <div class="container">
        <h1>{count}</h1>
        <button onClick={increase}>++</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={decrease}>--</button>
      </div>
    </div>
  );
}

export default App;
