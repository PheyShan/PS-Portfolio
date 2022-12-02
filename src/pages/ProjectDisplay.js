import React from 'react';
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import MouseIcon from '@mui/icons-material/Mouse';
import '../styles/ProjectDisplay.css';

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <img src={project.image} alt={project.alt}></img>
      <h1>{project.name}</h1>
      <p>
        <b>Description: </b>{project.description}
      </p>
      <p>
        <b>Skills: </b>{project.skills}
      </p>
      <ul>
        <li>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="projectsvg"
          >
            <MouseIcon />
          </a>
        </li>
        <li>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectDisplay;