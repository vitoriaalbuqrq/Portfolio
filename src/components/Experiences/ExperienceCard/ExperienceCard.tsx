import '../../Experiences/Experiences.css'
import { ReactNode, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ExperienceCard = ({ title, duration, company, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="experience-item">
      <div className="experience-item-header">
        <header>
          <h3>{title}</h3>
          <span className="experience-duration">{duration}</span>
        </header>
        <button type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen)
          }}>
          <div className="icon">
            <IoIosArrowDown
              style={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        </button>
      </div>

      <p className='company'>{company}</p>

      {isOpen && details && (
        <div className="experience-details">{details}</div>
      )}
    </div>
  );
}

export { ExperienceCard };
