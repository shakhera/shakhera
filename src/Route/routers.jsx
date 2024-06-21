import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../Layout/Root";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Project from "../pages/Project/Project/Project";
import Navbar from "../pages/shared/navbar/Navbar";
import Main from "../Layout/Main";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "projects",
        element: <Project></Project>,
      },
    ],
  },
]);

export default routers;
