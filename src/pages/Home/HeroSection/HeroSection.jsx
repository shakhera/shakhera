import React from "react";
import profile from "../../../assets/images/bg/pc.json";
import { Cursor, Typewriter } from "react-simple-typewriter";
import "./HeroSection.css";
import { FaDownload } from "react-icons/fa";
import resume from "../../../assets/resume/Shakhera_Khanom_Resume.pdf";
import { useLottie } from "lottie-react";

const HeroSection = () => {
  const text = [
    "a developer",
    "passionate about coding",
    "skilled in web development",
    "a ambitious",
  ];

  const options = {
    animationData: profile,
    loop: true,
  };
  const { View } = useLottie(options);
  const handleDownload = () => {
    window.open(resume, "_blank");
    // const link = document.createElement("a");
    // link.href = resume;
    // link.download = "shakhera_khanom_resume.pdf";
    // link.click();
  };

  return (
    <div className="bg-image bg-fixed bg-no-repeat bg-cover bg-center  w-full bg-[#EEEDEB] ">
      <div className="md:flex justify-center items-center h-screen">
        <div className="md:w-1/2 pt-12 md:pt-0 flex flex-col items-center space-y-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Hi, I am
          </h1>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-600">
            Shakhera Khanom
          </h3>
          <p className="text-xl md:text-2xl text-white">
            I am{" "}
            <Typewriter
              words={text}
              loop={5}
              cursor
              cursorStyle=""
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            <Cursor></Cursor>
          </p>
          <button
            onClick={handleDownload}
            className="mt-4 px-6 py-2 bg-cyan-600 text-white text-xl rounded-full shadow-lg hover:bg-cyan-700 transition duration-300 flex items-center"
          >
            Resume <FaDownload className="ml-2" />
          </button>

          {/* <div className="block md:hidden">
            <SocialLink />
          </div> */}
        </div>

        <div className="md:w-1/2 flex justify-center items-center md:mt-20 ">
          <span className=" rounded-full shadow-xl">{View}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
