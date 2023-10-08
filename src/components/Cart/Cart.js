import CartModal from "./CartModal";
import CartContext from "../../store/CartContext";
import { useContext, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import CartCounter from "./CartCounter";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const isCartEmpty = cartCtx.totalAmount;

  const cartItemAddHanlder = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLogin(true);
      const uid = user.uid;

      console.log(uid);
    }
  });

  const loginHandler = () => {
    navigate("/login");
  };

  const buttonStyle =
    " text-md font-normal cursor-pointer px-2 py-4 rounded-md ml-4   text-white ";

  const logoutButtonContent = "Login to proceed >";
  const loginButtonContent = "Proceed to pay >";

  const cartItems = (
    <ul className="m-0 p-0 bg-white rounded-xl mx-4 my-4 w-11/12 list-none">
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
          <div className=" md:text-xs sm:text-[9px]  sm:mr-4 basis-1/2 ">
            <li>{item.name}</li>
            <li className="font-bold">₹{Math.ceil(item.price * 10)}</li>
          </div>

          <div className="sm:mr-4">
            <CartCounter
              className=" basis-1/4  "
              onAdd={cartItemAddHanlder.bind(null, item)}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              amount={item.amount}
            />
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
          <div className="sticky  bottom-0 sm:w-[315px]  bg-counter rounded-lg flex  justify-between items-center font-bold text-md my-3 mx-1 mb-6">
            <div className="text-white mx-3 text-xs">
              <div> {"₹" + cartCtx.totalAmount}</div>
              <div className="font-extralight ">TOTAL </div>
            </div>
            <button className={buttonStyle}>
              <span>{isLogin && loginButtonContent}</span>
              <span onClick={loginHandler}>
                {!isLogin && logoutButtonContent}
              </span>
            </button>
          </div>
        </div>
      )}
    </CartModal>
    
  );
};

export default Cart;
