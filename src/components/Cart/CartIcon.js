import React from "react";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../store/CartContext";

const CartIcon = () => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
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
          <FaShoppingCart size={24} className="_wiggle" />
          <div className="flex flex-col font-bold text-[12px] leading-none">
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
