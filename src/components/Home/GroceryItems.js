import React from "react";
import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const GroceryAPI = (props) => {
  const quantityInputRef = useRef();
  const cartCtx = useContext(CartContext);

  const submitHandler = (item) => {
  
   

    // console.log(quantityInputRef)
    // const enteredQuantity = quantityInputRef.current.value;
    // const enteredQuantityNumber = +enteredQuantity;
    // console.log(enteredQuantityNumber);
    cartCtx.addItem({
      id: item.code,
      name: item.name,
      amount: 1,
      price: item.price.value,
    });

    
  };

  const navigate = useNavigate();

  const params = useParams();
  // console.log(params.category)

  const [grocery, setGrocery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [, setHttpError] = useState();
  useEffect(() => {
    console.log("I am called again!")
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

  const groceryDetailHandler = (item) => {
    navigate("/grocery/products/details", { state: item });
  };

  return (
    <div className="flex flex-wrap items-center justify-center   ">
      {grocery.map((item) => {
        if (item.images) {
          return (
            <div key={item.code}>
              <div className="shadow-md rounded-lg h-72 w-44 border border-gray-200 mx-5 my-4  cursor-pointer ">
                <div
                  onClick={() => groceryDetailHandler(item)}
                  className="group relative"
                >
                  <img
                    className="rounded-t-lg h-32 "
                    src={item.images[0].url}
                    alt="img"
                  />
                  <div className="p-10 h-38 absolute inset-0 bg-gray-800 bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                    {item.name}
                  </div>
                </div>
                <div className="p-5 ">
                  <div>
                    <h5 className="truncate  mb-2 text-sm font-bold  tracking-tight text-gray-900 dark:text-black">
                      {item.name}
                    </h5>
                  </div>

                  <div className=" my-14 h-9 w-36 p-2">
                    <div
                      className="grid grid-cols-2          
  
                    divide-green-500"
                    >
                      <div className="mr-1 text-left">
                        ₹
                        {item.price === undefined ||
                        item.price.value === undefined
                          ? 30
                          : Math.ceil(item.price.value * 10)}
                      </div>
                      <div className="rounded-lg text-center border border-green-900 text-green-700 hover:bg-green-600 hover:border-none hover:text-white font-bold p-1">
                        <button
                          ref={quantityInputRef}
                          label="Quantity"
                          input={{
                            id: "quantity_" + props.id,
                            type: "number",
                            min: "1",
                            max: "5",
                            step: "1",
                            defaultValue: "1",
                          }}
                          onClick={()=>{submitHandler(item)}}
                        >
                          Add
                        </button>
                      </div>
                    </div>
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
