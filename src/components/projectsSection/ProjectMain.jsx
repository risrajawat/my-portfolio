import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varients";

const projects = [
  {
    name: "Gemini AI",
    align: "right",
    image: "../../public/images/gemini.png",
    link: "https://gemini-ai-indol.vercel.app/",
  },

  {
    name: "To-Do App",
    align: "left",
    image: "../../public/images/todo.png",
    link: "https://to-do-app-nine-jet.vercel.app/",
  },

  {
    name: "My Portfolio",
    align: "right",
    image: "../../public/images/portfolio.png",
    link: "https://github.com/risrajawat/my-portfolio",
  },

  {
    name: "Wanderlust",
    align: "left",
    image: "../../public/images/hotel.jpg",
    link: "https://github.com/risrajawat/WanderLust",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
