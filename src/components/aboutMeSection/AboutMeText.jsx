import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hi, Iam Rishabh — a passionate and self-driven developer with a deep
        interest in <br />Web Development, AI, and Robotics.  After completing my
        schooling in 2024, <br />I have dedicated my time to mastering full-stack
        development, <br />Data Structures & Algorithms and building real-world
        projects <br />that solve meaningful problems.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange hover:text-cyan transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        My Resume
      </button>
    </div>
  );
};

export default AboutMeText;
