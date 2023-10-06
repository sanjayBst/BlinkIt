import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import CartProvider from "../../store/CartProvider";

const RootLayout = () => {
  return (
    <CartProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      
    </CartProvider>
  );
};

export default RootLayout;
