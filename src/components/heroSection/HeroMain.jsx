import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16 overflow-hidden">
      <div className="flex md:flex-row sm:flex-col mx-auto max-w-[1200px] justify-between items-center relative px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
