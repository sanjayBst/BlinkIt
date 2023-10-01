import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import PaanCorner from "./components/Pages/PaanCorner";
import RootLayout from "./components/Pages/Root";
import ErrorPage from "./components/Pages/Error";
import GroceryAPI from "./components/Home/GroceryItems";
import GroceryDetails from "./components/Home/GroceryDetails";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/paan", element: <PaanCorner /> },
      { path: "/grocery/:category", element: <GroceryAPI /> },
      { path: "/grocery/products/details", element:  <GroceryDetails/> },
      
    ],
  },
]);
const App = () => {
  return (
    <>
      <div>
        <RouterProvider router={routers} />
      </div>
    </>
  );
};

export default App;
