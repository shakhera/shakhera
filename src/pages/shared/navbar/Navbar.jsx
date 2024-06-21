import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import pic from "../../../assets/sk.jpg";
import { Link, Outlet } from "react-router-dom";
import control from "../../../assets/images/icons/control.png";

import icon1 from "../../../assets/images/menuIcons/1home.png";
import icon2 from "../../../assets/images/menuIcons/2about.png";
import icon3 from "../../../assets/images/menuIcons/3service.png";
import icon4 from "../../../assets/images/menuIcons/4portfolio.png";
import icon5 from "../../../assets/images/menuIcons/5blog.png";
import icon6 from "../../../assets/images/menuIcons/9contact.png";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import SocialLink from "../../../components/SocialLink/SocialLink";
import Footer from "../Footer/Footer";

const Navbar = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [open, setOpen] = useState(window.innerWidth >= 768);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const menuRef = useRef();

  const menuItems = [
    { title: "Home", link: "/", img: icon1 },
    { title: "About", link: "about", img: icon2 },
    { title: "Project", link: "projects", img: icon3 },
    { title: "Contact", link: "contact", img: icon6 },
  ];

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 768;
      setIsSmallScreen(isSmall);
      if (!isSmall) {
        setOpen(true);
      }
    };

    const dropDownClose = (e) => {
      if (!menuRef?.current?.contains(e?.target)) {
        setDropDownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", dropDownClose);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", dropDownClose);
    };
  }, []);

  return (
    <div>
      <div className="flex">
        {isSmallScreen ? (
          <nav className="flex items-center justify-between bg-gradient-to-b from-cyan-950 to-cyan-300 px-4 py-2  w-full">
            <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold  transition-all duration-200 hover:scale-110">
              <h2 className="uppercase font-serif">s h a k h e r a</h2>
            </div>
          
            <div
              ref={menuRef}
              onClick={() => setDropDownOpen(!dropDownOpen)}
              className="relative flex transition-transform md:hidden"
            >
              <FaBars className="cursor-pointer"></FaBars>
              {dropDownOpen && (
                <>
                  <ul className=" z-10 gap-2 bg-gradient-to-b from-cyan-950 to-cyan-300 absolute right-0 top-11 flex w-[200px] flex-col rounded-lg text-base">
                    {menuItems.map((menuItem, index) => (
                      <li
                        key={index}
                        className="cursor-pointer px-6 py-2 hover:bg-gradient-to-b from-cyan-950 to-cyan-300 text-white hover:text-gray-300  rounded-lg duration-300 "
                      >
                        <ActiveLink to={menuItem.link}>
                          <span className="flex gap-x-4 items-center">
                            <img
                              src={menuItem.img}
                              alt="icons"
                              className="w-5 hover:${menuItem.title}"
                            />
                            <span
                              className={`font-bold  origin-left duration-200`}
                            >
                              {menuItem.title}
                            </span>
                          </span>
                        </ActiveLink>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </nav>
        ) : (
          <>
            <div
              className={`${
                open ? "w-64" : "w-20"
              } fixed z-10 top-0 bottom-0 left-0 duration-500 bg-gradient-to-b from-cyan-950 to-cyan-300 min-h-screen`}
            >
              <img
                onClick={() => setOpen(!open)}
                src={control}
                alt=""
                className={`absolute -right-3 top-9 border-2 w-7 rounded-full border-cyan-900 ${
                  !open && "rotate-180"
                }`}
              />
              <div className="py-8 flex flex-col justify-center items-center">
                <img
                  src={pic}
                  alt=""
                  className="rounded-full w-36 duration-500"
                />
                <h2 className="uppercase pt-4 text-xl font-serif">
                  {open ? "s h a k h e r a" : "SK"}
                </h2>
                <span>{open ? <SocialLink /> : ""}</span>
              </div>
              <div>
                <ul>
                  {menuItems.map((menuItem, index) => (
                    <li
                      key={index}
                      className="cursor-pointer px-6 my-4 rounded-lg duration-300"
                    >
                      <ActiveLink to={menuItem.link}>
                        <span className="flex gap-x-4 items-center">
                          <img
                            src={menuItem.img}
                            alt="icons"
                            className="w-5 hover:${menuItem.title}"
                          />
                          <span
                            className={`font-bold hover:text-gray-300 ${
                              !open && "hidden"
                            } origin-left duration-200`}
                          >
                            {menuItem.title}
                          </span>
                        </span>
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className={`${open ? "ml-64" : "ml-20"} w-screen duration-500`}
            >
              <Outlet></Outlet>
              <Footer></Footer>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
