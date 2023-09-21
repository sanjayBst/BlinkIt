import React from "react";
import { useEffect, useState, useRef } from "react";
import { useParams , useNavigate} from "react-router-dom";

const GroceryAPI = (props) => {
  const quantityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    // console.log(quantityInputRef)
    const enteredQuantity = quantityInputRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;
    // console.log(enteredQuantityNumber);

    props.onAddToCart(enteredQuantityNumber);
  };
  
  const navigate = useNavigate();

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

  const groceryDetailHandler = (item) => {
   
    navigate('/grocery/products/details',{state:item});

  }

  return (
    <div className="flex flex-wrap items-center justify-center  "  >
      {grocery.map((item) => {
        if (item.images) {
          return (
            <div key={item.code} >
              <div className=" rounded-lg h-72 w-44 border border-gray-200 mx-5 my-4">
                <div  onClick={() => groceryDetailHandler(item)} >
                  <img
                    className="rounded-t-lg h-32 "
                    src={item.images[0].url}
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <div>
                    <h5 className="truncate mb-2 text-sm font-bold  tracking-tight text-gray-900 dark:text-black">
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
                          : Math.round(item.price.value * 10)}
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
                          onClick={submitHandler}
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
