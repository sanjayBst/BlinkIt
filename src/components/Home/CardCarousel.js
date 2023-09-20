import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import card1 from "../../assets/card1.webp";
import card2 from "../../assets/card2.avif";
import card3 from "../../assets/card3.avif";
import card4 from "../../assets/card4.avif";
import card5 from "../../assets/card5.avif";
import card6 from "../../assets/card6.avif";
import "pure-react-carousel/dist/react-carousel.es.css";

const CardCorousel = () => {
  const exampleRef = useRef();

  const navigate = useNavigate();

  const groceryPageHandler = (value) => {
    console.log(value);
    navigate(`/grocery/${value}`);
  };
 

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center w-80% h-3/4 sm:py-5 px-1">
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={6}
          visibleSlides={3.4}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-5 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <button
                        value={"stationery"}
                        onClick={(e) =>
                          groceryPageHandler(e.currentTarget.value)
                        }
                      >
                        <img
                          src={card1}
                          alt="black chair and white table"
                          className="object-cover object-center w-full"
                        />
                      </button>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <button
                        value={"beauty"}
                        onClick={(e) =>
                          groceryPageHandler(e.currentTarget.value)
                        }
                      >
                        <img
                          src={card2}
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                      </button>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <button
                        value={"electronics"}
                        onClick={(e) =>
                          groceryPageHandler(e.currentTarget.value)
                        }
                      >
                        <img
                          src={card3}
                          alt="sitting area"
                          className="object-cover object-center w-full"
                          value={(exampleRef.current = "electronics")}
                        />
                      </button>
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <button
                        value={"medicines"}
                        onClick={(e) =>
                          groceryPageHandler(e.currentTarget.value)
                        }
                      >
                        <img
                          src={card4}
                          alt="sitting area"
                          className="object-cover object-center w-full"
                        />
                      </button>
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div
                      className="flex flex-shrink-0 relative w-full sm:w-auto"
                      
                    >

                      <button value={"baby-care"}
                      onClick={(e) => groceryPageHandler(e.currentTarget.value)}>

                      <img
                        src={card5}
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                      </button>
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div
                      className="flex flex-shrink-0 relative w-full sm:w-auto"
                      
                    >

                      <button value={"pet-care"}
                      onClick={(e) => groceryPageHandler(e.currentTarget.value)} >

                      <img
                        src={card6}
                        alt="sitting area"
                        className="object-cover object-center w-full"
                      />
                      </button>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};
export default CardCorousel;
