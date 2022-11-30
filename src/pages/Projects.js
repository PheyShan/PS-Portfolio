import React from 'react';
import ProjectItem from "../components/ProjectItem";
import '../styles/Projects.css';
import { ProjectList } from "../helpers/ProjectList";
import Navbar from "../components/Navbar";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="projects">
        <h1>My Personal Projects</h1>
        <div className="projectList">
          {ProjectList.map((project, index) => {
            return <ProjectItem name={project.name} image={project.image} id={index} key={index} />
          })}
        </div>

        {/* OR */}
        {/* {ProjectList.map((project, index) => (
        <div className="projectList" key={index}>
          <ProjectItem name={project.name} image={project.image} />
        </div>
        ))} */}

      </div>
    </>
  );
};

export default Projects;