import React from "react";
import { useEffect, useState, useRef } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const ItemCorousel = (props) => {

    console.log(props)
    const [grocery, setGrocery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchGrocery = async () => {
      const response = await fetch(
        `https://blinkit-clone-36f01-default-rtdb.firebaseio.com/${props.category}.json`
      );

      console.log(response);
      if (!response.ok) {
        throw new Error("Oops! something went wrong..");
      }
      const responseData = await response.json();
    

      const slicedData = responseData.slice(0, 15)
      setGrocery(slicedData);
    //   console.log(responseData)

      setIsLoading(false);
    };

    fetchGrocery().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  

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
          infinite={false}
        >
          <div className="w-full relative flex items-center justify-center">
          <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-10 bg-gray-200 p-3 rounded-full cursor-pointer"
              id="prev"
            >
              <svg
                width={18}
                height={18}
                viewBox="0 0 6 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L0 7L7 13"
                  stroke="black"
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
                  

                  {grocery.map((item, index) => {
    if (item.images ) {
      return (
        <Slide index={index}>
          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
           
            <button>
              <div key={item.code}>
                <div className=" rounded-lg h-72 w-44  border border-gray-200 mx-5 my-4  cursor-pointer ">
                  <div className="object-cover object-center w-full flex items-center justify-center group relative">
                    <img
                      className=" rounded-t-lg h-36 w-28 "
                      src={item.images[0].url}
                      alt="img"
                    />
                    <div className="p-10 h-38 absolute inset-0 bg-gray-800 bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                      {item.name}
                    </div>
                  </div>
                  <div className="p-5 ">
                    <div>
                      <h5 className="truncate  mb-2 text-sm font-bold  tracking-tight text-gray-900 dark:text-black">
                        {item.name}
                      </h5>
                    </div>

                    <div className=" my-14 h-9 w-36 p-2">
                      <div
                        className="grid grid-cols-2          

        divide-green-500"
                      >
                        <div className="mr-1 text-left">
                          ₹
                          {item.price === undefined ||
                          item.price.value === undefined
                            ? 30
                            : Math.round(item.price.value * 10)}
                        </div>
                        <div className="rounded-lg text-center border border-green-900 text-green-700 hover:bg-green-600 hover:border-none hover:text-white font-bold p-1">
                          <button>Add</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </Slide>
      );
    }
  })}

                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 bg-gray-200 p-3 rounded-full"
              id="next"
            >
              <svg
                width={18}
                height={18}
                viewBox="0 0 6 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
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
export default ItemCorousel;



