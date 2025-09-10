import React from 'react'
import './SkillCard.css'

const SkillCard = ({ title, description, icon, skills }) => {
    return (
        <div className="skills-card">
            <div className="skill-icon">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="skill-icons">
                {skills.map((SkillIcon, index) => (
                    <div className="icon-contente" key={index}>
                        <SkillIcon className="skill-icon-item" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillCard