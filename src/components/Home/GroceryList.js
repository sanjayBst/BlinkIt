import React from "react";
import item1 from "../../assets/item1.avif";
import item2 from "../../assets/item2.avif";
import item3 from "../../assets/item3.avif";
import item5 from "../../assets/item5.avif";
import item6 from "../../assets/item6.avif";
import item7 from "../../assets/item7.avif";
import item8 from "../../assets/item8.avif";
import item9 from "../../assets/item9.avif";
import item10 from "../../assets/item10.avif";
import item11 from "../../assets/item11.avif";
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
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    item11,
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
  categoryMap.set("0", "paan");
  categoryMap.set("1", "dairy");
  categoryMap.set("2", "fruits");
  categoryMap.set("3", "soft-dinks");
  categoryMap.set("4", "breakfast");
  categoryMap.set("5", "ice-cream");
  categoryMap.set("6", "Bakery");
  categoryMap.set("7", "beverages");
  categoryMap.set("8", "kitchen");
  categoryMap.set("9", "spreads");
  categoryMap.set("10", "chicken");
  categoryMap.set("11", "baby-care");
  categoryMap.set("12", "medicines");
  categoryMap.set("13", "cleaning");
  categoryMap.set("14", "stationery");
  categoryMap.set("15", "masala");
  categoryMap.set("16", "personal-care");
  categoryMap.set("17", "pet-care");

  const onClickHandler = (value) => {
    console.log(categoryMap);
    // console.log(value);
    console.log(categoryMap.get(value.toString()));
    navigate(`/grocery/${categoryMap.get(value.toString())}`);
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-center mx-3">
        {arr.map((item, index) => {
          return (
            <div
              key={index}
              className="flex-auto flex-shrink-0  w-10 sm:w-auto"
            >
              <button
                onClick={(e) => onClickHandler(e.currentTarget.value)}
                value={index}
                
              >
                <img src={item} alt="Category images" />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GroceryList;
