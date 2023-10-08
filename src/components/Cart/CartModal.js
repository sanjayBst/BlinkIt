/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import { initFlowbite } from "flowbite";
import emptyCart from "../../assets/empty_cart.webp";
import { Offcanvas, Ripple, initTE } from "tw-elements";
import CartIcon from "./CartIcon";
import CartContext from "../../store/CartContext";
import OrderSummary from "./OrderSummary";

initTE({ Offcanvas, Ripple });

const ModalOverlay = (props) => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

const CartModal = (props) => {
  const cartCtx = useContext(CartContext);
  const isCartEmpty = cartCtx.totalAmount;

  return (
    <>
      
        <CartIcon />
     

      <div
        id="drawer-right-example"
        className=" fixed  right-0 z-50  bg-gray-100 h-screen  overflow-y-auto transition-transform translate-x-full  w-96 sm:w-[350px] "
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <div className="sticky top-0 w-full bg-white ">
          <div className=" container mb-3  ">
            <h5 className=" inline-flex items-center py-5 px-7 text-base font-bold text-black ">
              My Cart
            </h5>
          </div>
          <button
            type="button"
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            className=" text-gray-700 my-3 py-1 bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-50 dark:hover:text-black"
          >
            <svg
              className="w-2 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        {isCartEmpty === 0 && (
          <div className="bg-white mx-4 my-4 w-11/12 py-4 rounded-xl h-fill">
            <div className="container  flex justify-center items-center  h-44 w-full ">
              <div className="mb-30 h-36 w-36">
                <img src={emptyCart} alt="Cart" className="mx-auto block" />
              </div>
            </div>
            <div className="font-bold text-lg px-3  text-center">
              You don't have any items in your cart
            </div>
            <p className="text-sm text-gray-400 text-center mx-4 my-1">
              Your favourite items are just a click away
            </p>
            <div className="flex justify-center items-center my-5">
              <button
                type="button"
                data-drawer-hide="drawer-right-example"
                aria-controls="drawer-right-example"
                className="   bg-counter  text-white text-xs  py-3 px-5 rounded-lg"
              >
                Start Shopping
              </button>
            </div>
          </div>
        )}

        <div>
          <ModalOverlay>{props.children}</ModalOverlay>
        </div>

        {/* <div>
        { isCartEmpty !== 0 &&
<CartItemCorousel/>
}

</div> */}

        <div>{isCartEmpty !== 0 && <OrderSummary />}</div>
      </div>
      
    </>
  );
};

export default CartModal;
