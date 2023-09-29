import CartModal from "./CartModal";
import CartContext from "../../store/CartContext";
import { useLocation } from "react-router-dom";
import { useContext } from "react";

const Cart = () => {
  const groceryItem = useLocation();
  const cartCtx = useContext(CartContext);

  const buttonStyle =
    "text-green-600 border-2 border-green-600 font-inherit cursor-pointer bg-transparent  px-4 py-2 rounded-md ml-4 bg-green-700 hover:bg-green-600  hover:text-white ";

    console.log(groceryItem.state.name)

    //  const cartItems = {
    //   id: groceryItem.state.code,
    //   // name: groceryItem.state.name,
    //   // amount: 1,
    //   // price: groceryItem.state.price.value,
    // };
  
    const cartItems = (
      <ul className='m-0 p-0 list-none'>
        {[{ id: groceryItem.state.code, name: groceryItem.state.name, amount: 2, price: groceryItem.state.price.value }].map((item, index) => (
          <li key={index}>{item.name},{Math.ceil(item.price)}</li>
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
