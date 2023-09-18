import React from "react";
import GroceryAPI from "./GroceryItems";
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
import { useNavigate } from "react-router-dom";


const GroceryList = () => {
  const navigate = useNavigate();
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

  const categoryMap = new Map();
  categoryMap.set(0,"dairy");
  categoryMap.set(1,"fruits");

  const onClickHandler =(event)=>{

    event.preventDefault();
    console.log(event.target.value);
    navigate(`/grocery/dairy`);
  }


  return (
    <>
      <div className="flex items-center justify-center ">
        {arr.map((item,index) => {
          return (
            <div key={index} onClick={onClickHandler} value={index} className="flex-auto flex-shrink-0  w-10 sm:w-auto">
              <img src={item} alt="Category images" />
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center ">
        {arr1.map((items,index) => {
          return (
            <div key={index} className="flex-auto flex-shrink-0  w-10 sm:w-auto">
              <img src={items} alt="Category images" />
            </div>
          );
        })}
      </div>
      {/* <div><GroceryAPI/></div> */}
    </>
  );
};

export default GroceryList;
