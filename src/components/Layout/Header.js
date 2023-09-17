import React from "react";
import SearchBar from "./SearchBar";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="_nav px-2 sm:px-0">
      <div className="_header sm:flex h-full">
        <div className="hidden sm:flex max-w-[150px] md:max-w-[178px] w-full cursor-pointer sm:hover:bg-gray-50 items-center justify-center border-r _border-light">
          <span className="font-black text-[32px] md:text-[38px] text-yellow-400 tracking-tight">
            blink
          </span>
          <span className="font-black text-[32px] md:text-[38px] text-green-600 tracking-tight">
            it
          </span>
        </div>

        <div className="w-full sm:w-[240px] xl:w-[320px] py-4 px-1 sm:p-0 _header_loc flex items-center sm:justify-center cursor-pointer sm:hover:bg-gray-50">
          LocationPicker 
        </div>

        <div className="flex-1 relative _header_search">
          <SearchBar />
        </div>

        <div className="flex items-center _header_login justify-center cursor-pointer sm:hover:bg-gray-50 max-w-[80px] lg:max-w-[160px] w-full ">
          <span className="font-medium _text-default hidden sm:block">
            Login
          </span>
          <span className="sm:hidden _text-default">
            <FaRegUser size={20} />
          </span>
          <div className="py-2 hidden md:flex h-full items-center mr-8 ml-3">
            {/* <CartButton /> */}
            CartButton
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
