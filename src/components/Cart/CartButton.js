import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useState, Fragment } from "react";
import {
  Drawer,
  Button,
  Typography,
} from "@material-tailwind/react";


const CartButton = () => {
  const [openRight, setOpenRight] = useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => {
    setOpenRight(false);
    // console.log('Closing')
  }

  return (
    <Fragment>
      <div className="flex items-center rounded-[6px] min-w-[112px] h-[50px] py-2 px-3 gap-2 font-bold text-sm bg-[#0c831f] cursor-pointer text-white" onClick={openDrawerRight}>
     <FaShoppingCart size={24} className="_wiggle" />
      <div className="flex flex-col font-bold text-[14px] leading-none" >
        <span >My Cart</span>
      </div>
     </div>

      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="w-full p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography  className="font-bold" >
          My Cart
          </Typography>
          <div
            className=" hover:bg-gray-50 p-3"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </Drawer>
    </Fragment>
  );
};


// const CartButton = () => {
//   return (
//     <div className="flex items-center rounded-[6px] min-w-[112px] h-[50px] py-2 px-3 gap-2 font-bold text-sm bg-[#0c831f] cursor-pointer text-white">
//       <FaShoppingCart size={24} className="_wiggle" />
//       <div className="flex flex-col font-bold text-[14px] leading-none">
//         <span className="">My Cart</span>
//       </div>
//     </div>
//   );
// };

export default CartButton;
