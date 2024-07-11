import React from 'react'
import './Hero.css'
import curriculumPDF from '/assets/Curriculo-Vitoria.pdf'
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants'

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}

        className="hero-content">
        <div className='hero-title'>
          <h1>Vitória Albuquerque</h1>
          <h2>
            <TypeAnimation
              sequence={["Desenvolvedora Full-Stack"]}
              speed={50}
            />
          </h2>
        </div>
        <p>Olá! Sou Vitória, desenvolvedora Full-Stack graduanda em Ciência da Computação na UEPB, com experiência em aplicações web tanto no backend quanto no frontend. Explore meus projetos e entre em contato!</p>
        <div className="download-cv">
          <a href={curriculumPDF} download="Vitoria_Albuquerque_CV.pdf">Download CV</a>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}

        className="hero-content-img">
        <div className="hero-img">
          <img src="/assets/imgs/img_perfil.png" alt="foto" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero