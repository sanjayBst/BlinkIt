import React from "react";
// import classes from './Error.module.css';
import Header from "../Layout/Header";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main >
        <h1>An error occurred !</h1>
        <p>may be this page can't exist</p>
      </main>
    </>
  );
};

export default ErrorPage;
