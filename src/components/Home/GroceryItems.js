import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GroceryAPI = () => {
  const params = useParams();
  // console.log(params.category)

  const [grocery, setGrocery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchGrocery = async () => {
      const response = await fetch(
        `https://blinkit-clone-36f01-default-rtdb.firebaseio.com/${params.category}.json`
      );

      if (!response.ok) {
        throw new Error("Oops! something went wrong..");
      }
      const responseData = await response.json();
      // console.log(responseData);

      setGrocery(responseData);

      setIsLoading(false);
    };

    fetchGrocery().catch((error) => {
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
      {grocery.map((item) => {
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
