import React from "react";
import Banner from "./Banner";
import CardCarousel from "./CardCarousel";
import GroceryList from "./GroceryList";
import Footer from "../Layout/Footer";


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
        
      </div>
    </>
  );
};

export default HomePage;
