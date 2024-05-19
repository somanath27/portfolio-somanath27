import React from "react";
import { TypeAnimation } from "react-type-animation";
const TypeWrite = () => {
  return (
    <TypeAnimation
      sequence={[
        "a  FullStack Developer",
        1000,
        "a MERN Stack Developer",
        1000,
        "a NextJs Developer",
        1000,
        "a React-Native Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold"
      repeat={Infinity}
    />
  );
};

export default TypeWrite;
