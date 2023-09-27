import CartModal from "./CartModal";

const Cart = (props) => {

    const buttonStyle = 'font-inherit cursor-pointer bg-transparent border-solid px-2 py-8 rounded-md ml-4 bg-green-700 text-white hover:bg-green-600 hover:border-none hover:text-white '

  const cartItems = (
    <ul className='m-0 p-0 list-none'>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <CartModal>
      {cartItems}
      <div className='flex justify justify-between items-center font-bold text-lg my-4 mx-0 '>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className=' text-right'>
        <button className={buttonStyle}>Close</button>
        <button className={buttonStyle}>Order</button>
      </div>
    </CartModal>
  );
};

export default Cart;