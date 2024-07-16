import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import pic from "../assets/sk.jpg";
import icon1 from "../assets/images/menuIcons/1home.png";
import icon2 from "../assets/images/menuIcons/2about.png";
import icon3 from "../assets/images/menuIcons/3service.png";
import icon6 from "../assets/images/menuIcons/9contact.png";
import ActiveLink from "../components/ActiveLink/ActiveLink";
import Footer from "../pages/shared/Footer/Footer";
import SocialLink from "../components/SocialLink/SocialLink";
import { FaBars } from "react-icons/fa";

const Root = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(!isSmallScreen);

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 768;
      setIsSmallScreen(isSmall);
      setIsMenuOpen(!isSmall);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: "Home", link: "/", img: icon1 },
    { title: "About", link: "about", img: icon2 },
    { title: "Project", link: "projects", img: icon3 },
    { title: "Contact", link: "contact", img: icon6 },
  ];

  return (
    <div className="md:flex min-h-screen">
      {isSmallScreen && (
        <button
          onClick={toggleMenu}
          className="fixed z-20 top-4 left-4 text-3xl text-white"
        >
          <FaBars className="text-cyan-500"/>
        </button>
      )}
      <div
        className={`fixed z-10 top-0 bottom-0 left-0 bg-gradient-to-b from-cyan-950 to-cyan-300 min-h-screen duration-500 w-64 ${
          isSmallScreen
            ? isMenuOpen
              ? "translate-x-0"
              : "-translate-x-full"
            : ""
        }`}
      >
        <div className="py-8 flex flex-col items-center cursor-pointer">
          <img src={pic} alt="Profile" className="rounded-full w-12" />

          <h2 className="uppercase pt-4 text-xl font-serif">s h a k h e r a</h2>
          <SocialLink />
        </div>
        <ul>
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className="cursor-pointer px-6 my-4 rounded-lg duration-300"
              onClick={toggleMenu}
            >
              <ActiveLink to={menuItem.link}>
                <span className="flex gap-x-4 items-center">
                  <img src={menuItem.img} alt="icons" className="w-5" />
                  <span className={`font-bold origin-left duration-200`}>
                    {menuItem.title}
                  </span>
                </span>
              </ActiveLink>
            </li>
          ))}
        </ul>
      </div>

      <div className={`md:ml-64 flex-1 duration-500`}>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
