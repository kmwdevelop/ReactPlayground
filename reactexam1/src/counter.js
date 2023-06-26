import { useState } from "react";
import OddEventResult from "./OddEventResult";

const Counter = (props) => {
  console.log(props);
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEventResult count={count}></OddEventResult>
    </div>
  );
};

Counter.defaultProps = {
  initialValue: 0,
};

export default Counter;
