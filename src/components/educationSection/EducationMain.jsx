import React from "react";
import EducationText from "./EducationText";
import AllEducations from "./AllEducations";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varients";

const EducationMain = () => {
  return (
    <>
      <div id="education">
        <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <EducationText />
        </motion.div>

        <AllEducations />
      </div>
    </>
  );
};

export default EducationMain;
