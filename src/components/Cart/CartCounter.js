import React from "react";
// import { useState } from "react";

const CartCounter = (props) => {
  
console.log(props.amount)
  

  const buttonStyle = "bg-counter px-1 text-xs text-white font-bold m-0 ";
  return (
    <>
      <div className="flex p-1 bg-counter  rounded">
        <button className={buttonStyle} onClick={props.onRemove} >
          -
        </button>
        <span className={buttonStyle}>{props.amount}</span>
        <button className={buttonStyle} onClick={props.onAdd}>
          +
        </button>
      </div>
    </>
  );
};

export default CartCounter;
