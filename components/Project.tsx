import React from "react";
import ProjectCard from "./Helper/ProjectCard";
import chatapp from "../images/chatapp.png";

const Project = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading__mini">Recent Works</p>
        <h1 className="heading__primary">
          My Best <span className="text-yellow-300">Projects</span>
        </h1>
      </div>
      <ProjectCard
        title="CHAT APPLICATION"
        tech1="React"
        tech2="Javascript"
        tech3="Socket.io"
        tech4="NodeJs"
        image={chatapp}
      />
    </div>
  );
};

export default Project;
