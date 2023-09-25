import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import {  Fragment } from "react";
import { initFlowbite } from 'flowbite'
import {
  Offcanvas,
  Ripple,
  initTE,
} from "tw-elements";

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
   <button className="flex items-center rounded-[6px] min-w-[112px] h-[50px] py-2 px-3 gap-2 font-bold text-sm bg-[#0c831f] cursor-pointer text-white" type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
   <FaShoppingCart size={24} className="_wiggle" />
      <div className="flex flex-col font-bold text-[14px] leading-none" >
        <span >My Cart</span>
      </div>
   </button>
</div>

<div id="drawer-right-example" className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-200" tabindex="-1" aria-labelledby="drawer-right-label">

   <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" className="text-gray-700 bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-50 dark:hover:text-black" >
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span className="sr-only">Close menu</span>
   </button>

   <div className="container h-3/6 w-full bg-white mt-20">

    <div className="flex  items-center justify-center mx-3 h-">
      <img src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png" alt="Cart-image" />
    </div>

   </div>
   
  
   
</div>



    </>
  );
};



export default CartButton;
