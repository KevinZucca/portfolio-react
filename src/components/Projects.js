import React from "react";
import projects from "../json_files/projects.json";
import SingleProject from "./SingleProject";
import "../css/projects.css";

const Projects = () => {
  return (
    <div className="slide projects pt-28 px-10" id="projects">
      <h1 className="text-3xl md:text-7xl pb-3">Projects</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 mt-3">
        {projects.map((singleProj, index) => (
          <SingleProject key={index} singleProj={singleProj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
