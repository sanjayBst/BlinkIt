import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GroceryAPI = () => {

  const params = useParams();
  console.log(params.category)

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        `https://blinkit-clone-36f01-default-rtdb.firebaseio.com/${params.category}.json`
      );

      if (!response.ok) {
        throw new Error("Oops! something went wrong..");
      }
      const responseData = await response.json();
      console.log(responseData);

      const loadedMeals = [];

      // for(let i=0;i<responseData.length;i++){
      //   // console.log(responseData[i]);
      //   if(responseData[i].images)
      //      console.log(responseData[i].images[0].url)
      // }
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
    <div className="flex flex-wrap items-center justify-center">
      {/* <div >
              <div className=" rounded-lg h-72 w-44 border border-gray-200">
                
                <div>
                  <img
                    className="rounded-t-lg h-32"
                    src="https://i1.adis.ws/i/Brakes/33587_1?.jpg"
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <div>
                    <h5 className="mb-2 text-sm font-bold  tracking-tight text-gray-900 dark:text-black">
                     asdasdsfd
                    </h5>
                  </div>
                </div>
              </div>
              
            </div> */}

      {meals.map((item) => {
        if (item.images) {
          return (
            <div key={item.code}>
              <div className=" rounded-lg h-72 w-44 border border-gray-200">
                <div>
                  <img
                    className="rounded-t-lg h-32 "
                    src={item.images[0].url}
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <div>
                    <h5 className="mb-2 text-sm font-bold  tracking-tight text-gray-900 dark:text-black">
                      {item.name}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default GroceryAPI;
