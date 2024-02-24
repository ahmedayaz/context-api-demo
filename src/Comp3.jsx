import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Component3 = () => {
  const { incrementCount, decrementCount } = useContext(CounterContext);
  return (
    <>
    <button onClick={incrementCount}>Increment</button>&nbsp;
    <button onClick={decrementCount}>Decrement</button>
    </>
  )
}

export default Component3