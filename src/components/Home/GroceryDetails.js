import React from "react";
import { useLocation } from "react-router-dom";

const GroceryDetails = () => {
  const groceryItem = useLocation();

  console.log("params====>", groceryItem.state);

  return (
    <>
      {/* <div>{JSON.stringify(groceryItem.state)}</div>; */}
      <div className="grid grid-cols-2 h-3/4">
        <div className="container mx-auto   justify-center items-center grid grid-rows-2 ">
          <div className="object-center border border-gray-200 float-left ">
            <img
              src={groceryItem.state.images[0].url}
              className=" object-cover h-475 w-476"
              alt="Grocery Item"
            />
          </div>
          <div className=" float-right  mx-16 ">
            <h1 className=" text-2xl font-bold my-3"> Product Detail</h1>
            <h4 className="text-md font-bold my-2">Shelf life</h4>
            <p className="text-sm my-2"> Dummy text here...</p>
            <h4 className="text-md font-bold my-2 ">FSSAI License</h4>
            <p className="text-sm my-2 text-left">123456798</p>
            <h4 className="text-md font-bold my-2 ">Country of origin</h4>
            <p className="text-sm my-2 text-left">India</p>
            <h4 className="text-md font-bold my-2 ">Customer care detail</h4>
            <p className="text-sm my-2 text-left">Email: info@blinkit.com</p>
            <h4 className="text-md font-bold my-2 "> Seller</h4>
            <p className="text-sm my-2 text-left">Blinkit Pvt. Ltd.</p>
            <h4 className="text-md font-bold my-2 "> Description</h4>
            <p className="text-sm my-2 text-left">
              {groceryItem.state.description}
            </p>
          </div>
        </div>
        <div className=" float-right m-16">
          <div className="font-bold text-3xl"> {groceryItem.state.name}</div>
          <div className="font-bold text-xs"> 14 min</div>
          <div className="font-bold text-sm mt-10">
            ₹ {Math.round(groceryItem.state.price.value * 10)}
          </div>
          <div className= " w-16 mb-10 mt-3 rounded-lg text-center border border-green-900 text-green-700 hover:bg-green-600 hover:border-none hover:text-white font-bold p-1">
            <button>Add</button>
          </div>
          <div className="text-md font-bold ">Why shop from blinkit?</div>

          <div class="flex items-center ">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png"
              alt="img - 1 "
              className="h-12 w-12 my-3 float-left"
            />
            <p className="mx-6">
              <h1 className="font-bold text-sm"> Superfast Delivery</h1>
              <p className="text-xs">
                Get your order delivered to your doorstep at the earliest from
                dark stores near you.
              </p>
            </p>
          </div>

          <div class="flex items-center ">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png"
              alt="img - 2 "
              className="h-12 w-12 my-3 float-left"
            />
            <p className="mx-6">
              <h1 className="font-bold text-sm">Best Prices & Offers</h1>
              <p className="text-xs">
                Best price destination with offers directly from the
                manufacturers.{" "}
              </p>
            </p>
          </div>

          <div class="flex items-center ">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png"
              alt="img - 3 "
              className="h-12 w-12 my-3 float-left"
            />
            <p className="mx-6">
              <h1 className="font-bold text-sm"> Wide Assortment</h1>
              <p className="text-xs">
                Choose from 5000+ products across food, personal care, household
                & other categories.{" "}
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroceryDetails;
