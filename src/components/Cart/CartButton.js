import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Fragment } from "react";
import { initFlowbite } from "flowbite";
import { Offcanvas, Ripple, initTE } from "tw-elements";

initTE({ Offcanvas, Ripple });

const CartButton = () => {
  return (
    <>
      {/* <div className="flex items-center rounded-[6px] min-w-[112px] h-[50px] py-2 px-3 gap-2 font-bold text-sm bg-[#0c831f] cursor-pointer text-white" >
     <FaShoppingCart size={24} className="_wiggle" />
      <div className="flex flex-col font-bold text-[14px] leading-none" >
        <span >My Cart</span>
      </div>
     </div> */}

      <div className="text-center">
        <button
          className="flex items-center rounded-[6px] min-w-[112px] h-[50px] py-2 px-3 gap-2 font-bold text-sm bg-[#0c831f] cursor-pointer text-white"
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          <FaShoppingCart size={24} className="_wiggle" />
          <div className="flex flex-col font-bold text-[14px] leading-none">
            <span>My Cart</span>
          </div>
        </button>
      </div>

      <div
        id="drawer-right-example"
        className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-1/4 dark:bg-white"
        tabindex="-1"
        aria-labelledby="drawer-right-label"
      >
        <div className="container  w-full bg-white mb w-full bg-white py-6">
          <h5 class="inline-flex items-center  text-base font-bold text-black">
            My Cart
          </h5>
        </div>
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          className="text-gray-700 py-10 bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-50 dark:hover:text-black"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="container  flex justify-center items-center  h-44 w-full ">
          <div className="mb-30 h-36 w-36">
            <img
              src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png"
              alt="Cart-image"
              className="mx-auto block"
            />
          </div>
        </div>
        <div className="font-bold text-xl px-3  text-center">
          
          You don't have any items in your cart
        </div>
        <p className="text-md text-gray-600 text-center m-4" >Your favourite items are just a click away</p>
        <div className="flex justify-center items-center mt-10" >
          <button className="bg-green-700  text-white text-xs  py-3 px-5 rounded-lg">
            Start Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default CartButton;
