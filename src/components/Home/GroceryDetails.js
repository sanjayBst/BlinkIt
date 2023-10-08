import React from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const GroceryDetails = () => {
  const groceryItem = useLocation();
  const cartCtx = useContext(CartContext);

  const submitHandler = () => {
    cartCtx.addItem({
      id: groceryItem.state.code,
      name: groceryItem.state.name,
      image: groceryItem.state.images[0].url,
      amount: 1,
      price: groceryItem.state.price.value,
    });
  };

  // console.log("params====>", groceryItem.state.description);

  return (
    <>
      {/* <div>{JSON.stringify(groceryItem.state)}</div>; */}
      <div className="grid grid-cols-2  sm:block md:grid h-3/4">
        <div className="container mx-auto   justify-center items-center grid grid-rows-2 ">
          <div className="object-center   border border-gray-200 float-left ">
            <img
              src={groceryItem.state.images[0].url}
              className="flex  object-cover  sm:h-52 sm:pl-24  sm:w-60  md:px-0 md:ml-2 md:h-96 md:w-fit "
              alt="Grocery Item"
            />
          </div>
          <div className="md:hidden">
            <div className="font-bold  text-3xl"> {groceryItem.state.name}</div>
            <div className="md:hidden">
              <span className="font-bold float-left sm:text-lg sm:mt-4 text-sm mt-10">
                ₹ {Math.ceil(groceryItem.state.price.value * 10)}
              </span>
              <span
                className=" float-right sm:mt-1 sm:pt-3 sm:w-28 sm:h-10  sm:text-xs w-16 mb-10 mt-3 rounded-lg text-center border   bg-counter hover:border-none text-white font-bold p-1 cursor-pointer"
                onClick={submitHandler}
              >
                <button>Add To Cart</button>
              </span>
            </div>
          </div>
          <div className=" float-right sm:mx-5  mx-16 ">
            <h1 className="sm:text-lg text-2xl font-bold my-3">
              {" "}
              Product Detail
            </h1>
            <h4 className="text-md sm:text-sm font-bold my-2">Shelf life</h4>
            <p className="text-sm sm:text-xs my-2"> Dummy text here...</p>
            <h4 className="text-md sm:text-sm font-bold my-2 ">
              FSSAI License
            </h4>
            <p className="text-sm sm:text-xs my-2 text-left">123456798</p>
            <h4 className="text-md sm:text-sm font-bold my-2 ">
              Country of origin
            </h4>
            <p className="text-sm sm:text-xs my-2 text-left">India</p>
            <h4 className="text-md sm:text-sm font-bold my-2 ">
              Customer care detail
            </h4>
            <p className="text-sm sm:text-xs my-2 text-left">
              Email: info@blinkit.com
            </p>
            <h4 className="text-md sm:text-sm font-bold my-2 "> Seller</h4>
            <p className="text-sm sm:text-xs my-2 text-left">
              Blinkit Pvt. Ltd.
            </p>
            <h4 className="text-md sm:text-sm font-bold my-2 "> Description</h4>
            <p className="text-sm sm:text-xs my-2 text-left">
              {groceryItem.state.description === undefined
                ? "This is Dummy Description"
                : groceryItem.state.description}
            </p>
          </div>
        </div>
        <div className=" float-right sm:m-3  m-16">
          <div className="sm:hidden md:grid">
            <div className="font-bold sm:text-xl md:text-3xl">
              {" "}
              {groceryItem.state.name}
            </div>
            <div className="font-bold md:text-sm md:mt-2 text-xs"> 14 min</div>
            <div className="font-bold sm:text-xs md:mt-10 sm:mt-4 md:text-lg ">
              ₹ {Math.ceil(groceryItem.state.price.value * 10)}
            </div>
            <div
              className="sm:w-10 sm:mt-5 sm:text-xs md:w-16 md:mb-10 md:mt-3 rounded-lg text-center border border-green-900 text-counter bg-green-100 hover:border-none hover:text-white font-bold p-1 cursor-pointer"
              onClick={submitHandler}
            >
              <button>Add</button>
            </div>
          </div>
          <div className="sm:hidden md:flex md:text-xl text-md sm:text-sm sm:mb-3 font-bold ">
            Why shop from blinkit?
          </div>

          <div className="sm:hidden md:flex items-center ">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png"
              alt="img - 1 "
              className="h-12 w-12 my-3 float-left"
            />
            <div className="mx-6">
              <h1 className="font-bold text-sm"> Superfast Delivery</h1>
              <p className="text-xs">
                Get your order delivered to your doorstep at the earliest from
                dark stores near you.
              </p>
            </div>
          </div>

          <div className="sm:hidden md:flex items-center ">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png"
              alt="img - 2 "
              className="h-12 w-12 my-3 float-left"
            />
            <div className="mx-6">
              <h1 className="font-bold text-sm">Best Prices & Offers</h1>
              <p className="text-xs">
                Best price destination with offers directly from the
                manufacturers.{" "}
              </p>
            </div>
          </div>

          <div className="sm:hidden md:flex items-center ">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png"
              alt="img - 3 "
              className="h-12 w-12 my-3 float-left"
            />
            <div className="mx-6">
              <h1 className="font-bold text-sm"> Wide Assortment</h1>
              <p className="text-xs">
                Choose from 5000+ products across food, personal care, household
                & other categories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroceryDetails;
