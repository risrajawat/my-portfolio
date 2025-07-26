import React from "react";

const SingleEducation = ({ education }) => {
  return (
    <div className="md:h-[260px] md:w-[250px] sm:h-auto sm:w-auto sm:overflow-hidden border-2 border-orange border-dashed rounded-2xl mt-12 p-4">
      <p className="text-lg font-bold text-cyan mb-2">{education.title}</p>
      <p className="text-orange font-semibold mb-2"> {education.school}</p>
      <p className="mb-2">{education.years}</p>
      <p className="mb-2">{education.stream}</p>
      <p className="mb-2">{education.board}</p>
    </div>
  );
};

export default SingleEducation;
