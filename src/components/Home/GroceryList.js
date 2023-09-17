import React from "react";
import card2 from "../../assets/card2.avif";

const GroceryList = () => {
  return (
    <div className="w-28 h-44 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img className="rounded-t-lg " src={card2} alt="" />
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
