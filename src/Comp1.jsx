import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Component1 = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>Component 1 - {counter} </div>
  )
}

export default Component1

