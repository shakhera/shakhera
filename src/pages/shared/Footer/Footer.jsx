import React from "react";
import SocialLink from "../../../components/SocialLink/SocialLink";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-gradient-to-t from-black to-cyan-500 text-white py-8">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <p className="text-lg font-semibold mb-4">
            Let's Create Something Amazing Together
          </p>
          <p className="text-sm mb-2">
            Feel free to reach out to discuss collaborations, projects, or just
            to say hello!
          </p>
          <div className="">
            <SocialLink></SocialLink>
          </div>
          <p className="mt-4 text-sm">
            &copy; {new Date().getFullYear()} Shakhera Khanom (SK). All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
