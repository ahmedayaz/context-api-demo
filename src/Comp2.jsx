import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Component2 = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>Component 2 - {counter}</div>
  )
}

export default Component2