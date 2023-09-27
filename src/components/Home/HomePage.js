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
          <div className="text-3xl font-medium" >
          Dairy, Bread & Eggs
          </div>
          <ItemCorousel category="dairy"/>
        </div>
        <div>
        <div className="text-3xl font-medium">
        Rolling paper & tobacco
          </div>
          <ItemCorousel category="Bakery"/>
        </div>
        <div>
        <div className="text-3xl font-medium">
        Snacks & Munchies
          </div>
          <ItemCorousel category="fruits"/>
        </div>
        
         
        
      </div>
    </>
  );
};

export default HomePage;
