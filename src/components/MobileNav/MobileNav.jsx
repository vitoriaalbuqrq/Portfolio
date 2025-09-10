import React from 'react'
import "./MobileNav.css"

const MobileNav = ({ isOpen, toggleMenu }) => {

    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <div className="mobile-menu-container">
                    <div className="logo">Portfolio</div>

                    <ul>
                        <li>
                            <a href="#" className="menu-item">Home</a>
                        </li>
                        <li>
                            <a href="#services" className="menu-item">Serviços</a>
                        </li>
                        <li>
                            <a href="#experiences" className="menu-item">Experiências</a>
                        </li>
                        <li>
                            <a href="#projects" className="menu-item">Projetos</a>
                        </li>
                        <li>
                            <a href="#contactme" className="menu-item">Contato</a>
                        </li>
                        <a href="#contactme" className="contact-btn" >Contrate me</a>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav