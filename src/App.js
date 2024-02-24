import { useState } from "react";
import './App.css';
import { CounterContext } from './CounterContext';

import Component1 from "./Comp1";
import Component2 from "./Comp2";
import Component3 from "./Comp3";

function App() {
  const [counter, setCounter] = useState(100);

  const incrementCount = () => {
    setCounter(counter + 1);
  };

  const decrementCount = () => {
    setCounter(counter - 1);
  }

  return (
    <CounterContext.Provider value={{counter, incrementCount, decrementCount}}>
    <div className="App">
      Hello
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
