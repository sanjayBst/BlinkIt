import React, { useContext } from "react";


import { initFlowbite } from "flowbite";
import emptyCart from '../../assets/empty_cart.webp'
import { Offcanvas, Ripple, initTE } from "tw-elements";
import CartIcon from "./CartIcon";
import CartCounter from "./CartCounter";
import CartContext from "../../store/CartContext";



initTE({ Offcanvas, Ripple });


const ModalOverlay = (props) => {

  
  
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

const CartModal = (props) => {
  const cartCtx = useContext(CartContext)
  const isCartEmpty = cartCtx.totalAmount;

const styling = (isCartEmpty === 0 ? " fixed top-0 right-0 z-40 bg-white h-screen  overflow-y-auto transition-transform translate-x-full  w-96 " : " fixed top-0 right-0 z-40 bg-gray-100 h-screen  overflow-y-auto transition-transform translate-x-full  w-96 ")

  return (
    <>
      {/* <div className="flex items-center rounded-[6px] min-w-[112px] h-[50px] py-2 px-3 gap-2 font-bold text-sm bg-[#0c831f] cursor-pointer text-white" >
     <FaShoppingCart size={24} className="_wiggle" />
      <div className="flex flex-col font-bold text-[14px] leading-none" >
        <span >My Cart</span>
      </div>
     </div> */}

<CartIcon/>
      

      <div
        id="drawer-right-example"
        className={styling}
        tabindex="-1"
        aria-labelledby="drawer-right-label"
      >
        <div className="sticky top-0 w-full bg-white ">

        <div className=" container mb-20  py-6">
          <h5 className=" inline-flex items-center px-7 text-base font-bold text-black ">
            My Cart
          </h5>
        </div>
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          top-0    aria-controls="drawer-right-example"
          className=" text-gray-700 my-3 py-1 bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-50 dark:hover:text-black"
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
        </div>

     { isCartEmpty === 0 &&  <div>
        <div className="container  flex justify-center items-center  h-44 w-full ">
          <div className="mb-30 h-36 w-36">
            <img
              src={emptyCart}
              alt="Cart"
              className="mx-auto block"
            />
          </div>
        </div>
        <div className="font-bold text-xl px-3  text-center">
          You don't have any items in your cart
        </div>
        <p className="text-md text-gray-600 text-center m-4">
          Your favourite items are just a click away
        </p>
        <div className="flex justify-center items-center mt-10">
          <button type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          className="   bg-counter  text-white text-xs  py-3 px-5 rounded-lg">
            Start Shopping
          </button>
        </div>
        </div>}

        
        <div> 
        <ModalOverlay>{props.children}</ModalOverlay>
        </div>
      </div>
    </>
  );
};

export default CartModal;
