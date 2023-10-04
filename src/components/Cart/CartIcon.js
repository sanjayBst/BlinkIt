import React from "react";
import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import CartContext from "../../store/CartContext";

const CartIcon = () => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.length;
  return (
    <>
      <div className="text-center">
        <button
          className="flex items-center rounded-[6px] min-w-[112px] h-[50px] py-2 px-3 gap-2 font-bold text-sm bg-[#0c831f] cursor-pointer text-white"
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >

          <BsCart3 size={22} className="_wiggle " style={{strokeWidth:'0.4'}} />

          <div className="flex flex-col font-Gilroy-Bold text-sm  leading-none">
            <span>
              {numberOfCartItems === 0
                ? "My Cart"
                : numberOfCartItems + " items"}
            </span>
            <span>
              {numberOfCartItems === 0 ? "" : "₹" + cartCtx.totalAmount}
            </span>
          </div>
        </button>
      </div>
    </>
  );
};

export default CartIcon;
