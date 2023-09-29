import CartModal from "./CartModal";
import CartContext from "../../store/CartContext";
import { useContext } from "react";
import CartCounter from "./CartCounter";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const buttonStyle =
    "text-green-600 border-2 border-green-600 font-inherit cursor-pointer bg-transparent  px-4 py-2 rounded-md ml-4 bg-green-700 hover:bg-green-600  hover:text-white ";

  console.log(cartCtx.items);

  const cartItems = (
    <ul className="m-0 p-0 list-none">
      {cartCtx.items.map((item, index) => (
        <>
        <div className="flex flex-row container my-4 w-100% h-fill ">
          <div className="justify-center basis-1/4 mx-3">
            <li key={index}>
              <img src={item.image} alt="item" className=" h-16 w-16 m-0" />
            </li>
          </div>
          <div className=" text-xs  basis-1/2 mx-2">
            <li key={index}>{item.name}</li>
            <li key={index}>{Math.ceil(item.price * 10)}</li>
          </div>
          
          <div>
          

          <CartCounter className=' basis-1/4 ' />
         </div>
        </div>
        
        </>
      ))}
    </ul>
  );

  return (
    <CartModal>
      {cartItems}
      <div className="flex justify justify-between items-center font-bold text-lg my-4 mx-0 ">
        <span>Total Amount</span>
        <span> {cartCtx.totalAmount}</span>
      </div>
      <div className=" text-right">
        <button className={buttonStyle}>Order</button>
      </div>
    </CartModal>
  );
};

export default Cart;
