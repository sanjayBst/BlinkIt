import React from "react";
import card2 from "../../assets/card2.avif";
import GroceryAPI from "./GroceryAPI";
import item1 from "../../assets/item1.avif";
import item2 from "../../assets/item2.avif";
import item3 from "../../assets/item3.avif";
import item4 from "../../assets/item4.avif";
import item5 from "../../assets/item5.avif";
import item6 from "../../assets/item6.avif";
import item7 from "../../assets/item7.avif";
import item8 from "../../assets/item8.avif";
import item9 from "../../assets/item9.avif";
import item10 from "../../assets/item10.avif";
import item11 from "../../assets/item11.avif";
import item12 from "../../assets/item12.avif";
import item13 from "../../assets/item13.avif";
import item14 from "../../assets/item14.avif";
import item15 from "../../assets/item15.avif";
import item16 from "../../assets/item16.avif";
import item17 from "../../assets/item17.avif";
import item18 from "../../assets/item18.avif";
import item19 from "../../assets/item19.avif";
import item20 from "../../assets/item20.avif";

const GroceryList = () => {
  const arr = [
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
  ];

  const arr1 = [
    item11,
    item12,
    item13,
    item14,
    item15,
    item16,
    item17,
    item18,
    item19,
    item20,
  ];
  return (
    <>
      <div className="flex items-center justify-center ">
        {arr.map((item) => {
          return (
            <div className="flex-auto flex-shrink-0  w-10 sm:w-auto">
              <img src={item} alt="Category images" />
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center ">
        {arr1.map((items) => {
          return (
            <div className="flex-auto flex-shrink-0  w-10 sm:w-auto">
              <img src={items} alt="Category images" />
            </div>
          );
        })}
      </div>
      <div>{/* <GroceryAPI/> */}</div>
    </>
  );
};

export default GroceryList;
