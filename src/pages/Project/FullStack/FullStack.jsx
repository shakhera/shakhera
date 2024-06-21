import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import project1 from "../../../assets/images/project/Wild-Photographer.png";
import project2 from "../../../assets/images/project/allure.jpeg";
import project3 from "../../../assets/images/project/dish.jpeg";
import project4 from "../../../assets/images/project/matromoni.jpeg";

const FullStack = () => {
  const projects = [
    {
      id: 1,
      title: "Wild Photographer",
      description:
        "Wild Photographer is a full-stack web application designed for nature enthusiasts and photographers to showcase captivating wildlife photography and explore the wonders of the natural world.",
      liveURL: "https://wild-photographer-32aff.web.app/",
      image: project1,
    },
    {
      id: 2,
      title: "Allure Marketplace",
      description:
        "The Allure Marketplace is a e-commerce website is designed to provide customers with a seamless online shopping experience for modest clothing and accessories. Our platform caters to individuals looking for stylish and modest apparel options, offering a diverse range of products to meet their needs.",
      liveURL: "https://allure-marketplace.web.app/",
      image: project2,
    },
    {
      id: 3,
      title: "Dish Companion Zen",
      description:
        "Dish Companion Zen is a food website designed to elevate the culinary experience by providing users with a comprehensive platform for exploring recipes, discovering ingredients, and connecting with fellow food enthusiasts. Our goal is to inspire creativity in the kitchen, promote healthy eating habits, and foster a sense of community around food.",
      liveURL: "https://fir-dish-companion-zen.web.app/",
      image: project3,
    },
    {
      id: 4,
      title: "Match Mate Connect",
      description:
        "Match Mate Connect is an innovative matrimonial website dedicated to helping individuals find their perfect life partners. With a commitment to providing a seamless and user-friendly experience, Match Mate Connect caters to the diverse needs of individuals looking for love, companionship, and a lifelong partner.",
      liveURL: "https://match-mate-connect.web.app/",
      image: project4,
    },
  ];

  return (
    <div>
      {/* <div className="flex flex-wrap justify-center"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            liveURL={project.liveURL}
            image={project.image}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default FullStack;
