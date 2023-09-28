import CartModal from "./CartModal";
import CartContext from '../../store/CartContext';
import { useContext } from 'react';


const Cart = (props) => {
  const cartCtx = useContext(CartContext);

    const buttonStyle = 'text-green-600 border-2 border-green-600 font-inherit cursor-pointer bg-transparent  px-4 py-2 rounded-md ml-4 bg-green-700 hover:bg-green-600  hover:text-white '

  const cartItems = (
    <ul className='m-0 p-0 list-none'>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <CartModal>
      {cartItems}
      <div className='flex justify justify-between items-center font-bold text-lg my-4 mx-0 '>
        <span>Total Amount</span>
        <span> {cartCtx.totalAmount}</span>
      </div>
      <div className=' text-right'>
        <button className={buttonStyle}>Order</button>
      </div>
    </CartModal>
  );
};

export default Cart;