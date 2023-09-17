import React from "react";
import { useEffect, useState } from "react";

const GroceryAPI = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://store-groceries.p.rapidapi.com/groceries/search/vegetable",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "831a9e6aeemsh1dc5c2e80f4a052p1ce463jsnaf5c338fe23b",
            "X-RapidAPI-Host": "store-groceries.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Oops! something went wrong..");
      }
      const responseData = await response.json();
      console.log(responseData);

      const loadedMeals = [];

      //   for(let i=0;i<responseData.length;i++){
      //     console.log(responseData[i]);
      //   }
      setMeals(responseData);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      {meals.map((item) => {
        return (
          <div key={item.code}>
            <div className="w-28 h-44 bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              
              <div>
                <img
                  className="rounded-t-lg "
                  src={item.images[0].url}
                  alt=""
                />
              </div>
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                </div>
              </div>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default GroceryAPI;
