import CartModal from "./CartModal";
import CartContext from "../../store/CartContext";
import { useContext } from "react";
import item9 from '../../assets/item9.avif'

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const buttonStyle =
    "text-green-600 border-2 border-green-600 font-inherit cursor-pointer bg-transparent  px-4 py-2 rounded-md ml-4 bg-green-700 hover:bg-green-600  hover:text-white ";

  console.log(cartCtx.items);

  const cartItems = (
    <ul className="m-0 p-0 list-none">
      {cartCtx.items.map((item, index) => (
        <div className="flex flex-wrap  container justify-center w-100% h-fill ">
          <div>
            <li key={index}>
              <img src={item9} alt="item" className=" h-20 w-20" />
            </li>
          </div>
          <div>
            <li key={index}>{item.name}</li>
            <li key={index}>{Math.ceil(item.price * 10)}</li>
          </div>
         
        </div>
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
