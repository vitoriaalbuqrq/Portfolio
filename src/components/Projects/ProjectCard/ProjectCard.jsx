import React from 'react'
import './ProjectCard.css'
import { MdArrowOutward } from 'react-icons/md';

const ProjectCard = ({ details }) => {
    return (
        <div className="project-card">
            <div className="project-img">
                <img src={details.image} alt={details.title} />
            </div>
            <div className="project-info">
                <div className='project-title'>
                    <h6>{details.title}</h6>
                    <small>{details.date}</small>
                </div>
                <div className="project-role">{details.role}</div>
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
                        <a href={details.access_link} target="_blank" rel="noopener noreferrer">Demo<MdArrowOutward className='icon-btn' /> </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard