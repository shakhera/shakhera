import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitterSquare,
} from "react-icons/fa";

const SocialLink = () => {
  return (
    <div>
      <div className="flex gap-x-4 my-4 text-white cursor-pointer  ">
        <a
          href="https://github.com/shakhera"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="border-2  border-white  rounded-sm w-5 h-5 hover:outline-cyan hover:border-cyan-700 hover:text-cyan-700" />
        </a>
        <a
          href="https://www.linkedin.com/in/shakhera-khanom"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="border-2  border-white  rounded-sm w-5 h-5 hover:outline-cyan hover:border-cyan-700 hover:text-cyan-700" />
        </a>
        <a
          href="https://twitter.com/shakhera33"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare className="border-2  border-white  rounded-sm w-5 h-5 hover:outline-cyan hover:border-cyan-700 hover:text-cyan-700" />
        </a>
        <a
          href="https://www.facebook.com/shifa33sk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="border-2  border-white  rounded-sm w-5 h-5 hover:outline-cyan hover:border-cyan-700 hover:text-cyan-700" />
        </a>
      </div>
    </div>
  );
};

export default SocialLink;
