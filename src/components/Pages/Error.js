import React from "react";
// import classes from './Error.module.css';
import Header from "../Layout/Header";
import error from '../../assets/404_error.jpg'

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center h-[420px] w-fit" >
        <img src={error} alt="may be this page can't exist" className="bg-cover " />
      </main>
    </>
  );
};

export default ErrorPage;
