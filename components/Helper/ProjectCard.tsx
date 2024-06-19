import { StaticImageData } from "next/image";
import { MdxImage as Image } from "../../core/Mdx";
import React from "react";

interface Props {
  image: StaticImageData;
  title: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
}
const ProjectCard = ({ image, title, tech1, tech2, tech3, tech4 }: Props) => {
  return (
    <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="object-contain rounded-xl mx-auto shadow-md"
        />
      </div>
      <div>
        <h1 className="text-[25px] text-white">{title}</h1>
        <p className="text-white opacity-65 text-[15px] mt-[1rem]">
          Experience seamless communication with ChitChatter, where real-time
          messaging and dynamic typing indicators keep you in sync with friends
          and family. Enjoy vibrant group chats managed by admins who ensure a
          secure and enjoyable environment by controlling member access. Stay
          connected with instant notifications and a smooth, uninterrupted
          chatting experience.
        </p>
        <div className="mt-[1.3rem] grid-cols-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
          <h1 className="px-4 py-3 bg-blue-700 text-white rounded-lg text-center">
            {tech1}
          </h1>
          <h1 className="px-4 py-3 bg-yellow-500 text-slate-800 rounded-lg text-center">
            {tech2}
          </h1>
          <h1 className="px-4 py-3 bg-sky-500 text-white rounded-lg text-center">
            {tech3}
          </h1>
          <h1 className="px-4 py-3 bg-blue-400 text-white rounded-lg text-center">
            {tech4}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
