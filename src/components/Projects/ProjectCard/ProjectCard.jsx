import React from 'react'
import './ProjectCard.css'
import { IoArrowForwardSharp } from "react-icons/io5";

const ProjectCard = ({ details }) => {
    return (
        <div className="project-card">
            <div className="project-img">
                <img src={details.image} alt={details.title} />
            </div>
            <div className="project-info">
                <h6>{details.title}</h6>
                <div className="project-duration">{details.date}</div>
                <p>{details.description}</p>
                <ul>
                    {details.stacks.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <div className="project-buttons">
                    {details.github_link && (
                        <a href={details.github_link} target="_blank" rel="noopener noreferrer">GitHub</a>
                    )}
                    {details.access_link && (
                        <a href={details.access_link} target="_blank" rel="noopener noreferrer">Acesse aqui<IoArrowForwardSharp className='icon-btn' /> </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard