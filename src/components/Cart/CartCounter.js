import React from "react";
import { useState } from "react";

const CartCounter = () => {
  const [counter, setCounter] = useState(1);

  const incrementHandler = () => {
    setCounter(counter + 1);
  };

  const decrementHandler = () => {
    setCounter(counter - 1);
  };

  const buttonStyle = "bg-counter px-1 text-xs text-white font-bold m-0 ";
  return (
    <>
      <div className="flex p-1 bg-counter  rounded">
        <button className={buttonStyle} onClick={decrementHandler}>
          -
        </button>
        <span className={buttonStyle}>{counter}</span>
        <button className={buttonStyle} onClick={incrementHandler}>
          +
        </button>
      </div>
    </>
  );
};

export default CartCounter;
