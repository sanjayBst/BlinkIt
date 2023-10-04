import React from "react";
import Banner from "./Banner";
import CardCarousel from "./CardCarousel";
import GroceryList from "./GroceryList";
import ItemCorousel from "./ItemCorousel";

const HomePage = () => {
  return (
    <>
      <div className=" container mx-auto ">
        <div className="hidden lg:block">
          <Banner />
        </div>
        <div>
          <CardCarousel />
        </div>
        <div>
          <GroceryList />
        </div>
        <div>
          <div className=" text-2xl font-Medium mt-8" >Chicken, Meat & Fish</div>
          <ItemCorousel category="chicken" />
        </div>
        <div>
          <div className="text-2xl font-medium mt-2">Sweet Tooth</div>
          <ItemCorousel category="ice-cream" />
        </div>
        <div>
          <div className="text-2xl font-medium mt-2">Snacks & Munchies</div>
          <ItemCorousel category="fruits" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
