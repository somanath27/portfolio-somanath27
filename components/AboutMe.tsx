import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

const AboutMe = () => {
  return (
    <div className="mt-[-4rem] bg bg-black pb-[3rem]">
      <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <p className="heading__mini">About Me</p>
          <h1 className="heading__primary">
            Professional <span className="text-yellow-400">Website</span> For
            Your Business
          </h1>
          <p className="text-[15px] mt-[1.3rem] text-white opcity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            consequuntur incidunt! Quia delectus pariatur esse, quasi aliquam,
            ut vitae unde a necessitatibus modi iste doloremque optio quod
            voluptas! Rem, assumenda?
          </p>
          <div className="mt-[2rem] space-y-3">
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Frontend Development</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Backend Development</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Web Development</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">MERN Development</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">2+</p>
              <p className="text-[20px] text-black font-600">
                Years Experience
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">20+</p>
              <p className="text-[20px] text-black font-600">
                Happy Client
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">30+</p>
              <p className="text-[20px] text-black font-600">
                Project Done
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">3+</p>
              <p className="text-[20px] text-black font-600">
                Award Win
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
