import React from 'react'
import './Skills.css'
import SkillCard from './SkillCard/SkillCard';
import { FaCode, FaPenRuler, FaReact, FaBootstrap, FaNodeJs, FaJava, FaFigma, FaGitAlt } from "react-icons/fa6";
import { BiLogoTypescript, BiLogoJavascript, BiLogoDjango, } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { MdOutlineWeb } from "react-icons/md";
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants'

const Skills = () => {
    const frontendSkills = [FaReact, FaBootstrap, BiLogoTypescript, BiLogoJavascript];
    const backendSkills = [FaNodeJs, BiLogoDjango, FaJava, TbSql, FaGitAlt];
    const webDesignSkills = [FaFigma];

    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}

            className="skills-container" id="skills">
            <h5>Skills</h5>
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
                    title='Web Designer'
                    icon={<FaPenRuler className="icon" />}
                    skills={webDesignSkills}
                    description='Desenvolvimento de designs visualmente atraentes e amigáveis ao usuário.' />
            </div>
        </motion.section>
    )
}

export default Skills