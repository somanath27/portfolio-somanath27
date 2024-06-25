import { StaticImageData } from "next/image";
import { MdxImage as Image } from "../../core/Mdx";
import React from "react";
import { LinkIcon } from "@heroicons/react/16/solid";

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
      <div className="relative p-2 rounded-xl cursor-pointer transform transition-all duration-500 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-lg hover:-rotate-3 hover:scale-105 hover:shadow-2xl">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="object-contain rounded-xl mx-auto shadow-md transition-all duration-500 hover:shadow-xl"
        />
      </div>

      <div>
        <h1 className="text-[25px] text-white">{title}</h1>
        <a
          href="https://chatapplication-frontend.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 px-4 py-2 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg transform transition-transform hover:scale-105"
        >
          <LinkIcon className="h-5 w-5 mr-2" />
          Visit ChitChatter
        </a>
        <p className="text-white opacity-65 text-[15px] mt-[1rem]">
          Experience seamless communication with ChitChatter, where real-time
          messaging and dynamic typing indicators keep you in sync with friends
          and family. Enjoy vibrant group chats managed by admins who ensure a
          secure and enjoyable environment by controlling member access. Stay
          connected with instant notifications and a smooth, uninterrupted
          chatting experience.
        </p>
        <div className="mt-[1.3rem] grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
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
