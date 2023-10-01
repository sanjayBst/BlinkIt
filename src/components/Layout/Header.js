import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaRegUser } from "react-icons/fa";
import Cart from "../Cart/Cart";
import LocationDetector from "./LocationPicker";
import LoginModal from "../Pages/LoginModal";

const Header = () => {

 const [showModal, setShowModal] = useState(false)
 
  const navigate = useNavigate();

  const homeHandler = () => {
    navigate('/');
  };

  const authHandler = () => {
    setShowModal(true)
  }
 

  return (
    <>

    <header className="sticky top-0 z-50 bg-white  _nav px-2 sm:px-0">
      <div className="_header sm:flex ">
        <div className="hidden sm:flex max-w-[150px] md:max-w-[178px] w-full cursor-pointer sm:hover:bg-gray-50 items-center justify-center border-r _border-light" onClick={homeHandler}>
          <span className="font-extrabold  md:text-[38px] text-yellow-300 tracking-tight">
            blink
          </span>
          <span className="font-extrabold md:text-[38px] text-counter tracking-tight">
            it
          </span>
        </div>

        <div className="w-full sm:w-[240px] xl:w-[320px] py-4 px-1 sm:p-0 _header_loc flex items-center sm:justify-center cursor-pointer sm:hover:bg-gray-50">
          <LocationDetector/>
        </div>

        <div className="flex-1 relative _header_search">
          <SearchBar />
        </div>

        <div className="flex items-center _header_login justify-center cursor-pointer sm:hover:bg-gray-50 max-w-[80px] lg:max-w-[160px] w-full ">
          <span className="font-normal text-xl hidden sm:block" >
            <button onClick={authHandler}>
              {showModal && <LoginModal/> }
            Login
            </button>
          </span>
          <span className="sm:hidden _text-default">
            <FaRegUser size={20} />
          </span>
          <div className="container mx-auto p-4">
            <Cart/> 
          </div>
          <>
          </>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
