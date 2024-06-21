import React from "react";

const skillsData = [
  { label: "HTML", progress: 97 },
  { label: "CSS", progress: 90 },
  { label: "Tailwind CSS", progress: 90 },
  { label: "JavaScript", progress: 80 },
  { label: "React", progress: 70 },
  { label: "Next.js", progress: 65 },
  { label: "Node.js", progress: 60 },
  { label: "Express.js", progress: 60 },
  { label: "Mongoose", progress: 55 },
];

const Skills = () => (
  <div className="container mx-auto py-10">
    <h2 className="text-4xl text-center font-bold mb-8">Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-28">
      {skillsData.map(({ label, progress }, index) => (
        <div key={index} className="flex flex-col justify-start items-start">
          <div className="pl-4">
            <p className="text-lg font-semibold">{label}</p>
          </div>
          <div className="flex items-center w-full">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mx-4">
              <div
                className="bg-cyan-500 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="w-1/6 text-right">
              <p className="text-lg text-cyan-500">{progress}%</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
