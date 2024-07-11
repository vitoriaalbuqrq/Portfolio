import React, { useRef } from 'react'
import './Projects.css'
import { PROJECTS } from '../../utils/data'
import ProjectCard from './ProjectCard/ProjectCard'
import Slider from 'react-slick'

const Projects = () => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        Infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    };

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <section className="projects-container">
            <h5>Projetos</h5>

            <div className="projects-content" id="projects">
                <div className="arrow-right" onClick={slideRight}>
                    <span className="material-symbols-outlined">chevron_right</span>
                </div>

                <div className="arrow-left" onClick={slideLeft}>
                    <span className="material-symbols-outlined">chevron_left</span>
                </div>

                <Slider ref={sliderRef} {...settings}>
                    {PROJECTS.map((item) => (
                        <ProjectCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Projects