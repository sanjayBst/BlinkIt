import React from "react";
import Banner from "./Banner";
import CardCarousel from "./CardCarousel";
import GroceryList from "./GroceryList";
import Products from "./Products";


const HomePage = () => {
  return (
    <div>
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
          <Products />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
