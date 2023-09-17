import React from "react";
import Banner from "./Banner";
import CardCorousel from "./CardCorousel";
import GroceryList from "./GroceryList";

const HomePage = () => {
  return (
    <div>
      <div className=" container mx-auto ">
        <div>
          <Banner />
        </div>
        <div>
          <CardCorousel />
        </div>
        <div>
            <GroceryList/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
