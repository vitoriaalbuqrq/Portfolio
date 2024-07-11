import React, { useState } from 'react'
import "./Navbar.css"
import MobileNav from '../MobileNav/MobileNav';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

            <nav className='nav-wrapper'>
                <div className="nav-content">
                    <div className="logo">Vitória<span>DEV</span></div>
                    <ul>
                        <li>
                            <a href="#" className="menu-item">Home</a>
                        </li>
                        <li>
                            <a href="#skills" className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a href="#projects" className="menu-item">Projetos</a>
                        </li>
                        <li>
                            <a href="#contactme" className="menu-item">Contato</a>
                        </li>
                        <a href="#contactme" className="contact-btn" >Contrate me</a>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span
                            className={"material-symbols-outlined"}
                            styles={{ fontSize: "1.8rem" }}
                        >
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar