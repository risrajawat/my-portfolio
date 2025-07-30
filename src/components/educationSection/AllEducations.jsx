import React from "react";
import SingleEducation from "./SingleEducation";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varients";

const educations = [
  {
    title: "Senior Secondary ( Class 12th )",
    school: "S.Shri kanhaiya lal vidya mandir jalaun, UP",
    years: "2023-2024",
    stream: "Science(PCM)",
    board: "CBSE",
  },

  {
    title: "Bachelor of Technology(B.Tech)",
    school: "Newton School of Technology",
    years: "2025-2029",
    stream: "Computer Science & Artificial Intellegence",
  },
];

const AllEducations = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-center gap-24">
      {educations.map((education, index) => {
        return (
          <React.Fragment key={index}>
            <SingleEducation education={education} />
            {index < 1 ? (
              <motion.div>
                <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllEducations;
