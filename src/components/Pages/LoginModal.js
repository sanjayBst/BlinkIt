import React from "react";
import { useState } from "react";
import OtpInput from "otp-input-react";
import { auth } from "../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

const LoginModal = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("response: " + response)
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    console.log("verofied")
    const appVerifier = window.recaptchaVerifier;
    console.log("appVerifier",appVerifier)

    const formatPh = "+" + ph;
    console.log("formatPh "+formatPh)
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        console.log("confirmationResult ===>",confirmationResult)
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
       
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  const homeHandler = () => {
    navigate('/');
  }; 

  return (
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
     <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-white font-medium text-2xl">
            <button
                          onClick={homeHandler}
                          className="bg-counter w-72 py-2 mb-6 text-center rounded-sm text-white cursor-pointer"
                        >
                          {loading && (
                            <CgSpinner
                              size={20}
                              className="mt-1 animate-spin"
                            />
                          )}
                          <span>Verify OTP</span>
                        </button>
           </h2>
        )  : (
          <div>

            
            {showOTP ? (
              <>
                <div className="justify-center backdrop-brightness-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative pr-4 w-5/12 ">
                    <div className="border-0 items-center  rounded-2xl shadow-lg h-1/4 relative flex flex-col w-90 bg-gray-100 outline-none focus:outline-none">
                      <div className=" bg-white mb-16 py-6 w-full text-center rounded-t-2xl">
                        <h3 className="text-xl font-extralight mx-5 ">
                           Phone Number
                          Verification
                          <span className="float-right text-md hover:bg-gray-100 cursor-pointer rounded-md px-2" onClick={homeHandler}>X</span>
                        </h3>
                      </div>
                      <div className="mb-5 text-sm ">
                <label
                  htmlFor="otp"
                 
                >
                  Enter your OTP
                </label>
                <OtpInput
                          value={otp}
                          onChange={setOtp}
                          OTPLength={6}
                          otpType="number"
                          disabled={false}
                          autoFocus
                          className="opt-container "
                        ></OtpInput>
                 <button
                          onClick={onOTPVerify}
                          className="bg-counter w-72 py-2 mb-6 text-center rounded-sm text-white cursor-pointer"
                        >
                          {loading && (
                            <CgSpinner
                              size={20}
                              className="mt-1 animate-spin"
                            />
                          )}
                          <span>Verify OTP</span>
                        </button>
                      </div>
                      </div>
                </div>
                </div>
             </>
           ) : (
         <>
           <div className="justify-center backdrop-brightness-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
             <div className="relative pr-4 w-5/12 ">
                <div className="border-0 items-center  rounded-2xl shadow-lg h-1/4 relative flex flex-col w-90 bg-gray-100 outline-none focus:outline-none">
                     <div className=" bg-white mb-16 py-6 w-full text-center rounded-t-2xl">
                       <h3 className="text-xl font-extralight mx-5 ">
                         Phone Number Verification
                         <span className="float-right text-md hover:bg-gray-100 cursor-pointer rounded-md px-2" onClick={homeHandler}>X</span>
                       </h3>
                     </div>

                     <div>
                       <div className="container mb-10 w-60 text-center">
                         Enter your phone number to Login/Sign up
                       </div>
                     </div>
                   <div className="mb-5  ">
                       <label
                          htmlFor=""
                        
                          >
                       </label>
                         <PhoneInput
                          country={"in"}
                          value={ph}
                          onChange={setPh}
                        />
                        <button
                          onClick={onSignup}
                          className = { ph.length >= 12 ? "bg-counter w-72 py-2 mt-6 mb-6 text-center rounded-sm text-white cursor-pointer" : "bg-gray-300 w-72 py-2 mt-6 mb-6 text-center rounded-sm text-white  disabled:opacity-70 pointer-events-none"  }
                         >
                          {loading && (
                            <CgSpinner
                              size={20}
                              className="mt-1 animate-spin"
                            />
                          )}
                          <span>Next</span>
                           </button>
                
                      
                  <div className="text-xs text-center text-gray-500 font-light mb-5">
                         <div className="mb-1">
                           By continuing, you agree to our
                         </div>
                         <div className="text-counter text-center underline cursor-pointer">
                           <span className="mr-1">Terms of service</span>
                           <span className="ml-1">Privacy policy</span>
                         </div>
                       </div>
                     </div>
                   </div>
                   </div>
</div>     
                
                <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
         </div>
        )}
      
      </div>

    </section>
   
  );
};

export default LoginModal;
