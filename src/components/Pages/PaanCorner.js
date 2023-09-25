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

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative   max-w-lg  ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg h-90 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5  rounded-t">
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
                <div className="relative pl-20 pr-8 flex-auto">
                  <p className="my-0 text-slate-500 text-sm  leading-relaxed">
                    You are above 18 years of age and not buying tobacco on
                    behalf of anyone who is a minor (under 18 years of age).
                  </p>
                  <p className="my-4 text-slate-500 text-sm leading-relaxed">
                    Your location is not in and around a school or college
                    premises.
                  </p>
                  <p className="my-4 text-slate-500 text-xs leading-relaxed">
                    We are bound to report your account in case of any
                    transgressions! 
                    <div className="text-green-600 underline decoration-dashed cursor-pointer">

                    <p >Read Terms & Conditions </p>
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
                    className="bg-green-700 hover:bg-green-600 text-white active:bg-emerald-600 uppercase text-sm px-20 py-1 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-0 ease-linear transition-all duration-150 rounded-lg"
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
