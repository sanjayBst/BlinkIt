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
setIsLogin(true)
      const uid = user.uid;
      
      console.log(uid);
    }
  });

  const logoutHandler = () => {
       
   auth.signOut()
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
      <header className="flex overflow-x-auto flex-row border sticky top-0 z-50 bg-white  _nav px-2 sm:px-0">
        <div className="_header sm:flex ">
          <div
            className="hidden lg:block basis-1/6 sm:flex mt-3 font-extrabold max-w-[150px] md:max-w-[178px] px-8  w-full cursor-pointer sm:hover:bg-gray-50 items-center justify-center border-r _border-light"
            onClick={homeHandler}
          >
            <span className=" font-Gilroy-Bold-400 md:text-[38px] text-blink tracking-tight">
              blink
            </span>
            <span className="font-Gilroy-Bold-400 md:text-[38px] text-it tracking-tight">
              it
            </span>
          </div>

          <div className="flex w-fit basis-1/6 sm:w-[240px] xl:w-[320px] py-4 px-10  mr-9 sm:p-0  _header_loc items-center sm:justify-end cursor-pointer sm:hover:bg-gray-50">
            <LocationDetector className='float-right' />
            <span className="sm:hidden _text-default pl-8 sm:hover:bg-gray-50 ">
  
  {isLogin && <button onClick={logoutHandler}>Logout</button>}

              {!isLogin && <button onClick={loginHandler}><FaRegUser size={20}  /></button>}
</span>
          </div>

          <div className="flex-1 mt-1 sm:mt-0 basis-2/6 relative _header_search  ">
            <SearchBar />
          </div>

          <div className="flex items-center mx-16 _header_login justify-center cursor-pointer sm:hover:bg-gray-50 max-w-[80px] lg:max-w-[160px] w-full ">
            <span className="font-normal basis-1/6  text-xl hidden sm:block">
              
              {isLogin && <button onClick={logoutHandler}>Logout</button>}

              {!isLogin && <button onClick={loginHandler}>Login</button>}
            </span>
            
          </div>
            <> <span className="basis-1/6   cursor-pointer">


<div className="hidden lg:block container mx-auto  p-4">
  <Cart />
</div>
</span> </>
        </div>
      </header>
    </>
  );
};

export default Header;
