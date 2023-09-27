import React from "react";
import { useNavigate } from "react-router-dom";

const PaanCorner = () => {
  const [showModal, setShowModal] = React.useState(true);

  const navigate = useNavigate();

  const homeHandler = () => {
    console.log("Going to home...");
    navigate("/");
  };

  const paanHandler = () => {
    console.log("Going to paan...");
    navigate("/grocery/paan");
  };
  const banned = (
    <svg
      width={18}
      height={18}
      viewBox="0 0 512 512"
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
        stroke="red "
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center backdrop-brightness-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative   max-w-xl  ">
              {/*content*/}
              <div className="border-0 rounded-3xl shadow-lg h-90 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between  m-5  rounded-t">
                  <h3 className="text-xl font-semibold  mb-0 mt-0">
                    Please make sure...
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}

                <div className="flex items-center my-2">
                  <div className="ml-12 bg-gray-200 p-2 rounded-lg">{banned}</div>
                  <div className=" pl-5 pr-8">
                    <p className="my-0  text-black text-sm  ">
                      You are above 18 years of age and not buying tobacco on
                      behalf of anyone who is a minor (under 18 years of age).
                    </p>
                  </div>
                </div>

                <div className="flex items-center my-2">
                  <div className="ml-12 bg-gray-200 p-2 rounded-lg">{banned}</div>
                  <div className=" pl-5 pr-8">
                    <p className="my-0  ttext-black text-sm">
                      Your location is not in and around a school or college
                      premises.
                    </p>
                  </div>
                </div>
                <div className=" relative pl-10 pr-8 flex-auto">
                  <p className="my-4 text-black text-xs">
                    We are bound to report your account in case of any
                    transgressions!
                    <div className="text-green-600 hover:text-green-400 underline decoration-dashed cursor-pointer">
                      <p>Read Terms & Conditions </p>
                    </div>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6  rounded-b">
                  <button
                    className="text-green-700 background-transparent  border border-green-700 hover:bg-green-700  hover:text-white uppercase px-20 py-3 text-sm outline-none focus:outline-none mr-4 mb-0 ease-linear transition-all duration-150 rounded-lg"
                    type="button"
                    onClick={homeHandler}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-700 hover:bg-green-500 text-white active:bg-emerald-600 uppercase text-sm px-20 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-0 ease-linear transition-all duration-150 rounded-lg"
                    type="button"
                    onClick={paanHandler}
                  >
                    Yes, I confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default PaanCorner;
