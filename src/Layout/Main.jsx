import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/navbar/Navbar";
import useMediaQuery from "../components/hook/useMediaQuery";

const Main = () => {
  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  return (
    <div>
      <Navbar />
      {isSmallScreen ? (
        <div className="flex flex-col ">
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      ) : null}
    </div>
  );
};

export default Main;
