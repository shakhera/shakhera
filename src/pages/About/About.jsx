import React from "react";
import about from "../../assets/images/about/about.json";
import Lottie, { useLottie } from "lottie-react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaDatabase,
  FaGraduationCap,
} from "react-icons/fa";

const About = () => {
  const options = {
    animationData: about,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div className="flex justify-center items-center">
      <div className="md:flex justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 ">
        <div className="md:w-1/3 flex justify-center items-center shadow-lg p-6">
          <div className="w-full md:w-96 transform transition duration-500 hover:rotate-6">
            {View}
          </div>
        </div>
        <div className="md:w-2/3 mx-auto px-6 md:p-10 text-gray-800">
          <div className="bg-white px-6 py-2 rounded-lg transform transition duration-500 ">
            <h2 className="text-3xl font-bold text-center md:text-left mb-4 text-cyan-700 uppercase">
              Meet Shakhera
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Hi, I'm Shakhera Khanom, a MERN-Stack Web Developer who loves
              creating user-friendly websites. I have experience in front-end
              and back-end development using HTML, CSS, JavaScript, React.js,
              Node.js, Express.js, and MongoDB. I'm always eager to work on new
              and exciting projects. Let's connect and build something amazing
              together!
            </p>
          </div>
          <div className="ml-20 mb-4">
            <Tabs>
              <TabList className="">
                <Tab>
                  <p className="text-xl text-cyan-700 font-bold uppercase">Skills</p>
                </Tab>
                <Tab>
                  <p className="text-xl text-cyan-700 font-bold uppercase">Education</p>
                </Tab>
              </TabList>
              <TabPanel>
                <div className="pl-6 font-semibold text-gray-700 leading-relaxed">
                  <div className="flex items-center mb-2">
                    <FaJs className="mr-2 text-yellow-500" /> JavaScript
                  </div>
                  <div className="flex items-center mb-2">
                    <FaReact className="mr-2 text-blue-500" /> React Js
                  </div>
                  <div className="flex items-center mb-2">
                    <FaNodeJs className="mr-2 text-green-500" /> Node Js
                  </div>
                  <div className="flex items-center mb-2">
                    <FaNodeJs className="mr-2 text-green-500" /> Express Js
                  </div>
                  <div className="flex items-center mb-2">
                    <FaGit className="mr-2 text-gray-500" /> Git
                  </div>
                  <div className="flex items-center">
                    <FaDatabase className="mr-2 text-teal-500" /> Mongoose
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="pl-6 text-gray-700 leading-relaxed">
                  <div className="flex items-start mb-4">
                    <FaGraduationCap className="mr-3 mt-1 text-2xl text-cyan-500" />
                    <div>
                      <h3 className="font-semibold">
                        Master of Science in Information and Communication
                        Technology (ICT)
                      </h3>
                      <p className="text-gray-600">
                        Mawlana Bhashani Science and Technology University
                        (ongoing)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <FaGraduationCap className="mr-3 mt-1 text-2xl text-cyan-500" />
                    <div>
                      <h3 className="font-semibold">
                        Bachelor of Science in Information and Communication
                        Technology (ICT)
                      </h3>
                      <p className="text-gray-600">
                        Mawlana Bhashani Science and Technology University
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaGraduationCap className="mr-3 mt-1 text-2xl text-cyan-500" />
                    <div>
                      <h3 className="font-semibold">
                        Higher Secondary Certificate (HSC)
                      </h3>
                      <p className="text-gray-600">
                        Muminunnisa Govt. Women’s College
                      </p>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
