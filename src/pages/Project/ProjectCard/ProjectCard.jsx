import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, liveURL, image }) => {
  return (
    <div>
      {/* <div id="card-area">
        <div className="wrapper">
          <div className="box-area">
            <div className="box">
              <img src={image} alt="" />
              <div className=" overlay">
                <h2 className="card-title uppercase ">{title}</h2>
                <p className="text-gray-500 text-justify text-sm">
                  {description}
                </p>
                <div className="card-actions justify-end">
                  <a
                    href={liveURL}
                    rel=""
                    target="_blank"
                    className="mt-4 block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="">
        <div className="">
          <div className="card-area">
            <div className="project-card rounded-lg relative overflow-hidden shadow-xl ">
              <img
                src={image}
                alt=""
                className="w-full h-96 rounded-lg block transition-transform duration-500 "
              />
              <div className=" overlayout h-0 w-full rounded-md absolute text-gray-200 left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col px-10  text-center transition-height duration-500 ">
                <h2 className=" uppercase font-bold mb-2 mt-2">{title}</h2>
                <p className=" text-justify text-sm">{description}</p>
                <div className=" justify-end">
                  <a href={liveURL} rel="" target="_blank">
                    <button className=" bg-cyan-700  mb-4 mt-4 md:mb-0 text-white mx-auto h-9 w-24 overflow-hidden rounded-md shadow-md duration-300 hover:scale-95 hover:shadow-lg shadow-slate-800 ">
                      View Live
                    </button>
                  </a>
                </div>
              </div>
              {/* <div>
                <p>link or other part is token here</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
