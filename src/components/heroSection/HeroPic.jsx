import React from "react";
import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varients";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <img
        src="../../public/images/rimg.jpg"
        alt="Rishabh Singh"
        className="max-h-[450px] w-auto"
      />
      <div className="absolute -z-10 flex justify-center items-center w-[500px] h-[500px] sm:w-[400px] sm:h-[400px] animate-pulse">
        <PiHexagonThin className="w-full h-full text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
