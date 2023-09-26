import React from "react";
import Banner from "./Banner";
import CardCarousel from "./CardCarousel";
import GroceryList from "./GroceryList";
import ItemCorousel from "./ItemCorousel";


const HomePage = () => {
  return (
    <>
      <div className=" container mx-auto ">
        <div>
          <Banner />
        </div>
        <div>
          <CardCarousel />
        </div>
        <div>
          <GroceryList />
        </div>
        <div>
          dairy
          <ItemCorousel category="dairy"/>
        </div>
        <div>
          <ItemCorousel category="Bakery"/>
        </div>
        <div>
        fruits
          <ItemCorousel category="fruits"/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
