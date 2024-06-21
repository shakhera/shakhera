import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import pic from "../assets/sk.jpg";
import { Link } from "react-router-dom";
import control from "../assets/images/icons/control.png";

import icon1 from "../assets/images/menuIcons/1home.png";
import icon2 from "../assets/images/menuIcons/2about.png";
import icon3 from "../assets/images/menuIcons/3service.png";
import icon4 from "../assets/images/menuIcons/4portfolio.png";
import icon5 from "../assets/images/menuIcons/5blog.png";
import icon6 from "../assets/images/menuIcons/9contact.png";

import ActiveLink from "../components/ActiveLink/ActiveLink";
import Footer from "../pages/shared/Footer/Footer";
import SocialLink from "../components/SocialLink/SocialLink";

const Root = () => {
  const [open, setOpen] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItems = [
    { title: "Home", link: "/", img: icon1 },
    { title: "About", link: "about", img: icon2 },
    { title: "Project", link: "projects", img: icon3 },
    { title: "Contact ", link: "contact", img: icon6 },
  ];

  return (
    <div className="md:flex min-h-screen">
      {isSmallScreen ? (
        <nav className="w-full bg-gradient-to-b from-cyan-950 to-cyan-300 p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-serif text-white">s h a k h e r a</h2>
            <button onClick={() => setOpen(!open)} className="text-white">
              {open ? "Close" : "Menu"}
            </button>
          </div>
          {open && (
            <ul className="mt-4 space-y-2">
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <ActiveLink to={menuItem.link}>
                    <span className="flex items-center text-white">
                      <img src={menuItem.img} alt="icons" className="w-5" />
                      <span className="ml-2">{menuItem.title}</span>
                    </span>
                  </ActiveLink>
                </li>
              ))}
            </ul>
          )}
        </nav>
      ) : (
        <div className={`fixed z-10 top-0 bottom-0 left-0 ${open ? "w-64" : "w-20"} duration-500 bg-gradient-to-b from-cyan-950 to-cyan-300 min-h-screen`}>
          <img
            onClick={() => setOpen(!open)}
            src={control}
            alt=""
            className={`absolute -right-3 top-9 border-2 w-7 rounded-full border-cyan-900 ${!open && "rotate-180"}`}
          />
          <div className="py-8 flex flex-col items-center">
            <img src={pic} alt="" className="rounded-full w-36" />
            <h2 className="uppercase pt-4 text-xl font-serif">{open ? "s h a k h e r a" : "SK"}</h2>
            {open && <SocialLink />}
          </div>
          <ul>
            {menuItems.map((menuItem, index) => (
              <li key={index} className="cursor-pointer px-6 my-4 rounded-lg duration-300">
                <ActiveLink to={menuItem.link}>
                  <span className="flex gap-x-4 items-center">
                    <img src={menuItem.img} alt="icons" className="w-5" />
                    <span className={`font-bold ${!open && "hidden"} origin-left duration-200`}>{menuItem.title}</span>
                  </span>
                </ActiveLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className={`${open && !isSmallScreen ? "ml-64" : "ml-0"} flex-1`}>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
