import React from "react";

import bannerImg from "../../assets/banner.webp";

function Banner() {
  return (
    <div className="container mx-auto p-4 w-80%">


      <div className="flex justify-center">
        <img
          src={bannerImg} // Replace with your image URL
          alt="Your Image Alt Text"
          className="w-100% h-100%" 
        />
      </div>
    </div>
  );
}

export default Banner;
