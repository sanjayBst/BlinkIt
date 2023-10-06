import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaRegUser } from "react-icons/fa";
import Cart from "../Cart/Cart";
import LocationDetector from "./LocationPicker";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLogin(true);
      const uid = user.uid;

      console.log(uid);
    }
  });

  const logoutHandler = () => {
    auth
      .signOut()
      .then(() => {
        setIsLogin(false);

        console.log("sucessfully LoggedOut");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const homeHandler = () => {
    navigate("/");
  };

  const loginHandler = () => {
    navigate("/login");
  };

  // const authHandler = () => {
  //   setShowModal(true)
  // }

  return (
    <>
      <header className="flex overflow-x-auto sm:block border sticky top-0 z-50 bg-white  _nav px-2 sm:px-0">
        <div className="_header sm:flex lg:h-24">
          <div
            className=" basis-1/6  sm:hidden md:flex mt-3 font-extrabold max-w-[150px] md:max-w-[768px] px-8  w-full cursor-pointer sm:hover:bg-gray-50 items-center justify-center border-r _border-light"
            onClick={homeHandler}
          >
            <span className=" font-Gilroy-Bold-400 md:text-[38px] text-blink tracking-tight">
              blink
            </span>
            <span className="font-Gilroy-Bold-400 md:text-[38px] text-it tracking-tight">
              it
            </span>
          </div>

          <div className=" sm:block md:flex md:basis-4/6 md:mx-0 md:px-0 md:float-left   sm:ml-3 sm:py-5 sm:basis-11/12  flex w-fit  sm:w-20  py-4   mr-9 sm:p-0  _header_loc items-center sm:justify-end md:justify-start cursor-pointer sm:hover:bg-gray-50">
            <LocationDetector className="float-right  sm:w-80" />
            <span className="md:basis-5/6">
              <SearchBar />
            </span>
          </div>

          {/* <div className="flex-1 mt-1  2  basis-2/6 relative _header_search  "> */}
          <span className=" _text-default sm:mt-4 1/10 sm:py-5 lg:hidden  sm:mr-7 text-right pl-8 sm:hover:bg-gray-50 ">
            {isLogin && <button onClick={logoutHandler}>Logout</button>}

            {!isLogin && (
              <button onClick={loginHandler}>
                <FaRegUser size={20} />
              </button>
            )}
          </span>
          {/* </div> */}

          <div className="flex sm:hidden lg:flex items-center   _header_login justify-center cursor-pointer sm:hover:bg-gray-50 lg:w-20  lg:ml-16 ">
            <span className="font-normal basis-1/6  text-xl lg:flex sm:hidden">
              {isLogin && <button onClick={logoutHandler}>Logout</button>}

              {!isLogin && <button onClick={loginHandler}>Login</button>}
            </span>
          </div>
          <>
            {" "}
            <span className="flex lg:mt-2 lg:ml-9 basis-1/6   cursor-pointer">
              <div className="  container mx-auto  p-4">
                <Cart />
              </div>
            </span>{" "}
          </>
        </div>
      </header>
    </>
  );
};

export default Header;
