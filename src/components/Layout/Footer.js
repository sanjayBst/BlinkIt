import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {

  
  return (
    <div>
      <footer className="bg-white dark:bg-white">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="gap-x-10 grid grid-cols-3  px-4 py-6 lg:py-8 md:grid-cols-6 ">
            <div className="w-28">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Usefull Links
              </h2>
              <ul className="text-sm">
                <li className="mb-1">
                  <Link to="/" className=" hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Press
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Lead
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Value
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-12  w-28">
              <ul className="text-sm">
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Privacy
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Terms
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    FAQs
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Security
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Mobile
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-12 w-28">
              <ul className="text-sm">
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Partner
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Express
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Seller
                  </Link>
                </li>

                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Spotlight
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Warehouse
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Deliver
                  </Link>
                </li>
              </ul>
            </div>

            <div >
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Categories
              </h2>
              <ul className="text-sm ">
                <li className="mb-1">
                  <Link to="/" className=" hover:underline">
                    Vegetables & Fruits
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Cold Drinks & Juices
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Bakery & Biscuits
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Dry Fruits, Masala & Oil
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Paan Corner
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Pharma & Wellness
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Personal Care
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Beauty & Cosmetics
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Toys & Games
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-11">
              <ul className="text-sm">
                <li className="mb-1">
                  <Link to="/" className=" hover:underline">
                    Dairy & Breakfast
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Instant & Frozen Food
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Sweet Tooth
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Sauces & Spreads
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Organic & Premium
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Cleaning Essentials
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Ice Creams & Frozen Desserts
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Magazines
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Print Store
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-11">
              <ul className="text-sm">
                <li className="mb-1">
                  <Link to="/" className=" hover:underline">
                    Munchies
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Tea, Coffee & Health Drinks
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Atta, Rice & Dal
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Chicken, Meat & Fish
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Baby Care
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Home & Office
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Pet Care
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Books
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="px-4 py-6 bg-gray-50 dark:bg-gray-50 md:flex md:items-center md:justify-between">
            <span className="text-xs text-gray-500  xs:text-left">
              © Blink Commerce Private Limited (formerly known as Grofers India
              <br /> Private Limited), 2016-2023
            </span>

            <div className="flex justify-center ">
              <div className="flex items-center border w-auto rounded-lg px-4 py-2  mx-2 bg-gray-900 text-white">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  alt="play-store "
                  className="w-6 md:w-6"
                />
                <Link to='https://play.google.com/store/apps/details?id=com.grofers.customerapp&hl=en_IN&gl=US&pli=1'>

                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Google Play Store </p>
                </div>
                </Link>
              </div>
              <div className="flex items-center border  rounded-lg px-4 py-2 w-52 mx-2 bg-gray-900 text-white">

                <img src={logo} alt="apple-logo" className="w-7 md:w-7" />
                <Link to="https://apps.apple.com/md/app/blinkit-grocery-in-minutes/id960335206">
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base "> Apple Store</p>
                </div>
                </Link>
              </div>
            </div>
            <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
              <Link
                to="https://in.linkedin.com/in/sanjaybst"
                className="text-white bg-black p-3 hover:bg-gray-100 rounded-full hover:text-blue-500 dark:hover:text-indigo-500"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 23 24"
                >
                  <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                to="https://github.com/sanjayBst"
                className="text-white bg-black p-3 hover:bg-gray-100 rounded-full  hover:text-black dark:hover:text-black"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </Link>
              <Link
                to="https://www.facebook.com/blinkit.india/"
                className="text-white ml-5 bg-black p-3 hover:bg-gray-100 rounded-full hover:text-blue-700 dark:hover:text-blue-700"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link
                to="https://twitter.com/letsblinkit?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                className="text-white bg-black p-3 hover:bg-gray-100 rounded-full hover:text-blue-400 dark:hover:text-blue-400"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </Link>
              
              <Link
                to="https://www.instagram.com/letsblinkit/"
                className="text-white bg-black p-3 hover:bg-gray-100 rounded-full hover:text-pink-500 dark:hover:text-orange-500"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                    clipRule="evenodd"
                  />
                   <span className="sr-only">Instagram </span>
                </svg>
              </Link>
            </div>
          </div>
          <div className="text-sm text-gray-500  sm:text-left mx-5 mb-10  ">
            “Blinkit” is owned & managed by "Blink Commerce Private Limited"
            (formerly known as Grofers India Private Limited) and is not
            related, linked or interconnected in whatsoever manner or nature, to
            “GROFFR.COM” which is Link real estate services business operated by
            “Redstone Consultancy Services Private Limited”.
          </div>
          <div className="text-sm text-center font-semibold mb-5 text-gray-500" >
          <Link to="https://github.com/sanjayBst" > Developed with ❤️ by Sanjay Bisht</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
