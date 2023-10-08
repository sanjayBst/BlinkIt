import React from "react";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
const OrderSummary = () => {
  const cartCtx = useContext(CartContext);

  const deliveryCondition = cartCtx.totalAmount < 299 ? 30 : "Free";
  const smallCartCharge = cartCtx.totalAmount < 99 ?  cartCtx.totalAmount+40 : cartCtx.totalAmount;
  const deliveryCharge = cartCtx.totalAmount < 299 ?  cartCtx.totalAmount+30 : cartCtx.totalAmount;

  return (
    <>
      <div className=" container mx-4 my-4 sm:ml-4 w-11/12 h-fill bg-white rounded-xl items-center ">
        <div className="text-sm font-bold p-3">Bill Details</div>

        <div className="grid grid-cols-2  gap-4 text-xs ml-4 my-1 text-gray-500 ">
          <span>MRP</span>
          <span className="text-right mr-6">{"₹" + cartCtx.totalAmount}</span>
        </div>

        <div className="grid grid-cols-2 text-xs ml-4 my-0 text-gray-500 ">
          <span>Delivery Charge</span>
          <span className="text-right mr-6">{deliveryCondition}</span>

          
        </div>
        <div className="ml-4">
        {cartCtx.totalAmount < 299 && (
          <span className=" text-xs text-counter ">
            Shop for ₹{299 - cartCtx.totalAmount} more, to save ₹30 on delivery charge
          </span>

          )}
        </div>

          
        
          {cartCtx.totalAmount < 99 && (
            <>
            <div className="grid grid-cols-2 text-xs ml-4 mt-1  text-gray-500 ">
            <span>Small cart charge</span>
            <span className="text-right mr-6">₹10</span>
            </div>
            <span className="ml-4 text-xs text-counter  ">
              Shop for ₹{99 - cartCtx.totalAmount} more, to remove this charge
            </span>
            </>
          )}
       
        
        <div className=" grid grid-cols-2 text-sm font-medium p-3">
          <span>Grand Total</span>
          <span className="text-right mr-3">{"₹" + cartCtx.totalAmount < 99 ? smallCartCharge : deliveryCharge}</span>
        </div>
        <div className="text-xs text-gray-400 bg-gray-50 pl-4 mb-7 rounded-xl py-2">
        Coupons are only applicable on the Blinkit app
        </div>
      </div>
        <div className="container mx-4 my-4 w-11/12 h-fill bg-white pr-6 rounded-xl items-center mb-8">
          <h3 className="text-sm font-bold p-3" >Cancellation Policy</h3>
          <p className="text-xs text-gray-400 font-medium pl-4 mb-7 rounded-xl py-2" >Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
        </div>
        <div className="mb-28">

        </div>
    </>
  );
};

export default OrderSummary;
