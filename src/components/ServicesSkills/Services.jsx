import React from 'react'
import './Skills.css'
import SkillCard from './SkillCard/SkillCard';
import { FaCode, FaPenRuler, FaReact, FaBootstrap, FaNodeJs, FaJava, FaFigma, FaGitAlt, FaAngular, FaPython } from "react-icons/fa6";
import { BiLogoTypescript, BiLogoJavascript, BiLogoDjango, } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { MdOutlineWeb } from "react-icons/md";
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants'
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiSolidity } from 'react-icons/si';

const Services = () => {
    const frontendSkills = [FaReact, BiLogoTypescript, BiLogoJavascript, FaAngular, RiTailwindCssFill, FaBootstrap];
    const backendSkills = [FaNodeJs, FaPython, SiSolidity, FaJava, TbSql, FaGitAlt];
    const uxUi = [FaFigma];

    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}

            className="skills-container" id="services">
            <h5>Serviços</h5>
            <div className="skills-content">
                <SkillCard
                    title='Frontend'
                    icon={<MdOutlineWeb className="icon" />}
                    skills={frontendSkills}
                    description='Construção de interfaces de usuário interativas e responsivas usando frameworks e tecnologias modernas.' />
                <SkillCard
                    title='Backend'
                    icon={<FaCode className="icon" />}
                    skills={backendSkills}
                    description='Criação de APIs funcionais e integração eficiente com bancos de dados para aplicações backend.' />
                <SkillCard
                    title='UX/UI'
                    icon={<FaPenRuler className="icon" />}
                    skills={uxUi}
                    description='Design de interfaces modernas, atraentes e focadas na experiência do usuário.' />
            </div>
        </motion.section>
    )
}

export default Services