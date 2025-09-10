import { ExperienceCard } from "./ExperienceCard/ExperienceCard";
import "./Experiences.css";
import { TimelineContainer } from "./TimelineContainer/TimelineContainer";

const Experiences = () => {
  return (
    <section className="experience-section" id="experiences">
      <h5>Experiência</h5>
      <div className="experience-container">
        <TimelineContainer>
          <ExperienceCard
            title="Frontend Developer"
            duration="ago 2025 - até o momento"
            company="Freelancer"
            details={
              <>
                <ul>
                  <li>Desenvolvimento e implementação de interfaces web responsivas, priorizando usabilidade e experiência do usuário.</li>
                  <li>Criação de layouts e design de interface intuitivos, alinhados às necessidades do cliente.</li>
                  <li>Integração com APIs para consumo e envio de dados, garantindo comunicação eficiente entre frontend e backend.</li>
                  <li>Desenvolvimento de formulários avançados com validação robusta usando React Hook Form e Zod.</li>
                </ul>
                <div className="techs-used">
                  <p>Tecnologias mais usadas:</p>
                  <ul>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Shadcn UI</li>
                    <li>Figma</li>
                  </ul>
                </div>
              </>
            }
          />
        </TimelineContainer>

        <TimelineContainer>
          <ExperienceCard
            title="Estágio em Blockchain e Web3"
            duration="set 2024 - mar 2025"
            company="Compass.UOL"
            details={
              <>
                <ul>
                  <li>Estudo e aplicação prática de blockchain, Smart Contracts (Solidity), Ethereum, Web3 e ReactJS;</li>
                  <li>Aprofundamento em Cloud Computing com foco em fundamentos e serviços AWS;</li>
                  <li>Atuação com metodologia ágil (Scrum) em equipes de desenvolvimento;</li>
                  <li>Participação no desenvolvimento de um dApp para emissão e validação de certificações digitais.</li>
                </ul>
                <div className="techs-used">
                  <p>Tecnologias mais usadas:</p>
                  <ul>
                    <li>Solidity</li>
                    <li>Blockchain</li>
                    <li>Node.js</li>
                    <li>ReactJS</li>
                  </ul>
                </div>
              </>
            }
          />
        </TimelineContainer>

        <TimelineContainer>
          <ExperienceCard
            title="Full Stack Developer"
            duration="jan 2022 - até o momento"
            company="Projetos pessoais e acadêmicos"
            details={
              <>
                <ul>
                  <li>Desenvolvimento de aplicações web completas, atuando no frontend e backend.</li>
                  <li>Criação de APIs REST e integração com bancos de dados relacionais e não-relacionais.</li>
                  <li>Implementação de autenticação, autorização e boas práticas de segurança.</li>
                  <li>Construção de interfaces responsivas e focadas na experiência do usuário.</li>
                  <li>Exploração de tecnologias emergentes, incluindo desenvolvimento Web3 e contratos inteligentes em Solidity.</li>
                  <li>Containerização e deploy de aplicações utilizando Docker.</li>
                </ul>
                <div className="techs-used">
                  <p>Tecnologias mais usadas:</p>
                  <ul>
                    <li>Spring Boot</li>
                    <li>Django</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>Angular</li>
                    <li>SQL / MongoDB</li>
                    <li>Web3.js</li>
                    <li>Solidity</li>
                    <li>Docker</li>
                  </ul>
                </div>
              </>
            }
          />
        </TimelineContainer>
      </div>
    </section>
  );
};

export default Experiences;
