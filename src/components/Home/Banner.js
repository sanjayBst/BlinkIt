import React from "react";
import { useNavigate } from "react-router-dom";

import bannerImg from "../../assets/banner.webp";

function Banner() {
  const navigate = useNavigate();

  const coursesPage = () => {
    navigate("/paan");
  };

  return (
    <div className="container mx-auto px-auto">
      <div className="flex justify-center">
        <button onClick={coursesPage}>
          <img
            src={bannerImg}
            alt="Paan Corner"
            className="w-100% h-100%"
          />
        </button>
      </div>
    </div>
  );
}

export default Banner;
