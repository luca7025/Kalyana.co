import React from "react";
import Navbar from "./src/Component/Navbar/Navbar";
import Footer from "./src/Component/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Layout;
