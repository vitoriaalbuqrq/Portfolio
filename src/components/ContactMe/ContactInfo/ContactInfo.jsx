import './ContactInfo.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <section className="contact-info-container">
      <div className="contact-content">
        <a className="icon-content">
          <MdOutlineMailOutline className='icon' />
        </a>
        <p>albuquerquevitoria14@gmail.com</p>
      </div>

      <div className="contact-content">
        <a className="icon-content" href="https://github.com/vitoriaalbuqrq" target="_blank" rel="noopener noreferrer">
          <FaGithub className='icon' />
        </a>
        <a href="https://github.com/vitoriaalbuqrq" target="_blank" rel="noopener noreferrer">https://github.com/vitoriaalbuqrq</a>
      </div>

      <div className="contact-content">
        <a className="icon-content" href="https://www.linkedin.com/in/vit%C3%B3ria-albuquerque-1a746b162/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='icon' />
        </a>
        <a href="https://www.linkedin.com/in/vit%C3%B3ria-albuquerque-1a746b162/" target="_blank" rel="noopener noreferrer">Vitória Albuquerque</a>
      </div>
    </section>
  )
}

export default ContactInfo