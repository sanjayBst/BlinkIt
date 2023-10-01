import React from "react";
import { FiSmartphone } from "react-icons/fi";
import { useState } from "react";

const LoginModal = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const enteredValue = e.target.value;
    
    // Check if the entered value is a number and if it has at most 10 digits
    if (/^\d{0,10}$/.test(enteredValue)) {
      setInputValue(enteredValue);
    }
  }

  return (
    <>
      <>
        <div className="justify-center backdrop-brightness-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative pr-4 w-5/12 ">
            <div className="border-0 items-center  rounded-2xl shadow-lg h-1/4 relative flex flex-col w-90 bg-gray-100 outline-none focus:outline-none">
              <div className=" bg-white mb-16 py-6 w-full text-center rounded-t-2xl">
                <h3 className="text-xl font-extralight mx-5 ">
                  Phone Number Verification
                </h3>
              </div>

              <div>
                <div className="container mb-10 w-60 text-center">
                  Enter your phone number to Login/Sign up
                </div>
              </div>
              <div className="mb-5  ">
                <label htmlFor="phoneNumber" className="relative text-black ">
                  <FiSmartphone className=" pointer-events-none w-4 h-7  absolute top-1/2 transform -translate-y-1/2 left-3" /> 
                  <span className=" pointer-events-none text-sm font-light absolute top-1/2 transform -translate-y-1/2 left-9">
                    + 91 -
                  </span>
                  <input
                    className="py-2 pl-[4.5rem] border-gray-300 text-sm font-light focus:border-gray-400 focus:ring-0 w-72 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  rounded-sm  "
                    type="number" value={inputValue} 
                    onChange={handleInputChange} 
                    placeholder="Enter Phone" 
                  />
                </label>
              </div>
              <div className="bg-counter w-72 py-2 mb-6 text-center rounded-sm text-white">
                <button>Next</button>
              </div>
              <div className="text-xs text-gray-500 font-light mb-5">
                <div className="mb-1">By continuing, you agree to our</div>
                <div className="text-counter underline cursor-pointer">
                  <span className="mr-1" >Terms of service</span>
                  <span className="ml-1" >Privacy policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
      </>
    </>
  );
};

export default LoginModal;
