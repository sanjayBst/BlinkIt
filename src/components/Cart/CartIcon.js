import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import CartContext from "../../store/CartContext";

const CartIcon = () => {
  const cartCtx = useContext(CartContext);




  const numberOfCartItems = cartCtx.items.length;
  // console.log("numberOfCartItems==>",numberOfCartItems)
  return (
    <>
      <div className="text-center">
        <button
          className="  items-center rounded-[6px] sm:w-[50px]  md:w-[112px] sm:h-[30px] md:h-[50px] py-2 px-3 gap-2 font-bold text-sm bg-[#0c831f] cursor-pointer text-white"
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          <BsCart3
            
            className="_wiggle sm:hidden  md:h-5 md:w-5"
            style={{ strokeWidth: "0.4" }}
          />

          <div className="flex flex-col font-Gilroy-Bold md:text-sm sm:text-[8px] leading-none">
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
