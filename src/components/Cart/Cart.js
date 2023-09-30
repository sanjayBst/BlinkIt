import CartModal from "./CartModal";
import CartContext from "../../store/CartContext";
import { useContext } from "react";
import CartCounter from "./CartCounter";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const isCartEmpty = cartCtx.totalAmount;

  const buttonStyle =
    " text-md font-light cursor-pointer px-2 py-4 rounded-md ml-4   text-white ";

  const buttonContent = "Login to proceed >";

  const cartItems = (
    <ul className="m-0 p-0 bg-white rounded-xl  list-none">
      {cartCtx.items.map((item, index) => (
        <div
          className="flex flex-row container my-4 w-100% h-fill   items-center "
          key={index}
        >
          <div className=" basis-1/4 mx-3">
            <li>
              <img src={item.image} alt="item" className=" h-16 w-16 " />
            </li>
          </div>
          <div className=" text-xs  basis-1/2 ">
            <li>{item.name}</li>
            <li className="font-bold">₹{Math.ceil(item.price * 10)}</li>
          </div>

          <div>
            <CartCounter className=" basis-1/4  " />
          </div>
        </div>
      ))}
    </ul>
  );

  return (
    <CartModal>
      {cartItems}
      {isCartEmpty !== 0 && (
        <div className="fixed bottom-0 bg-white w-96 px-4 rounded-xl ">
          <div className="sticky  bottom-0  bg-counter rounded-lg flex  justify-between items-center font-bold text-md my-3 mx-1 mb-6">
            <div className="text-white mx-3 text-xs">
              <div> {"₹" + cartCtx.totalAmount}</div>
              <div className="font-extralight ">TOTAL </div>
            </div>
            <button className={buttonStyle}>{buttonContent}</button>
          </div>
        </div>
      )}
    </CartModal>
  );
};

export default Cart;
