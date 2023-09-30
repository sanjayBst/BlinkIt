import React from "react";

const CartCounter = () => {
  const buttonStyle = "bg-counter px-1 text-xs text-white font-bold m-0 ";
  return (
    <>
      <div className="flex p-1 bg-counter  rounded">
        <button className={buttonStyle}>-</button>
        <button className={buttonStyle}>1</button>
        <button className={buttonStyle}>+</button>
      </div>
    </>
  );
};

export default CartCounter;
