import React from 'react';
import { Code, ShieldCheck, Globe, Wrench, Layers } from 'lucide-react';
import { FaPython, FaJava, FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaLaptopCode, FaAws } from "react-icons/fa";
import { SiR, SiC, SiCplusplus, SiSwift, SiJavascript, SiArduino, SiOpencv, SiAmazonapigateway } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscTerminal } from "react-icons/vsc";
import { MdAutorenew } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { CiCloudOn } from "react-icons/ci";
import '../styles/Skills.css';

const Skills = () => {
  const programmingLanguages = [
    { name: 'Python', icon: <FaPython size={50} color="#3776ab" /> },
    { name: 'Java', icon: <FaJava size={50} color="#ed8b00" /> },
    { name: 'C', icon: <SiC size={50} color="#007acc" /> },
    { name: 'C++', icon: <SiCplusplus size={50} color="#007acc" /> },
    { name: 'JavaScript', icon: <SiJavascript size={50} color="#f7df1e" /> },
    { name: 'HTML/CSS', icon: <FaHtml5 size={50} color="#e34f26" /> },
    { name: 'R', icon: <SiR size={50} color="#276dc3" /> },
    { name: 'Swift', icon: <SiSwift size={50} color="#fa7343" /> }
];

const frameworks = [
    { name: 'React', icon: <FaReact size={50} color="#61dafb" /> },
    { name: 'Node.js', icon: <FaNodeJs size={50} color="#339933" /> },
    { name: 'Arduino', icon: <SiArduino size={50} color="#00979d" /> },
    { name: 'OpenCV', icon: <SiOpencv size={50} color="#5c3ee8" /> },
   ];

   const technicalSkills = [
    { name: 'Full Stack', icon: <Layers size={50} color="black" /> },
    { name: 'Git & GitHub', icon: <FaGitAlt size={50} color="#f05032" /> },
    { name: 'PostgreSQL', icon: <BiLogoPostgresql size={50} color="#336791" /> },
    { name: 'CI/CD', icon: <MdAutorenew size={50} color="#2196f3" /> },
    { name: 'REST APIs', icon: <SiAmazonapigateway size={50} color="#ff6b35" /> },
    { name: 'AWS', icon: <FaAws size={50} color="#ff9900" /> },
    { name: 'Bash', icon: <VscTerminal size={50} color="#4eaa25" /> },
    { name: 'Agile/Scrum', icon: <RiTeamFill size={50} color="#0052cc" /> }
   ];

   const certifications = [
    { name: 'AWS Cloud Practitioner', icon: <CiCloudOn size={50} color="#0ea5e9" /> },
    { name: 'AWS Developer', icon: <FaLaptopCode size={50} color="#ff9900" /> }
   ];

  const SkillCard = ({ skill }) => (
    <div className="skill1-card">
      <div className="skill1-icon">
        {typeof skill.icon === 'string' ? skill.icon : skill.icon}
      </div>
      <span className="skill1-name">{skill.name}</span>
    </div>
  );

  const SkillSection = ({ title, skills, icon, colorClass }) => (
    <div className="skill1-section">
      <div className="section1-header">
        <div className={`section1-icon ${colorClass}`}>
          {icon}
        </div>
        <h3 className="section1-title">{title}</h3>
      </div>
      <div className="skills1-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="skills1-page">
      {/* Hero Section */}
      <section className="hero1-section">
        <h1 className="hero1-title">
          <span className="gradient1-text">My Skills</span>
        </h1>
        <p className="hero1-subtitle">
          <br /> A comprehensive overview of my technical expertise
        </p>
      </section>

      {/* Skills Content */}
      <main className="skills1-main">
        <SkillSection 
          title="Programming Languages"
          skills={programmingLanguages}
          icon={<Code size={24} />}
          colorClass="purple1-gradient"
        />
        
        <SkillSection 
          title="Frameworks & Libraries"
          skills={frameworks}
          icon={<Globe size={24} />}
          colorClass="blue1-gradient"
        />
        
        <SkillSection 
          title="Technical Skills & Tools"
          skills={technicalSkills}
          icon={<Wrench size={24} />}
          colorClass="green1-gradient"
        />

        <SkillSection 
          title="Certifications"
          skills={certifications}
          icon={<ShieldCheck size={24} />}
          colorClass="red1-gradient"
        />
      </main>
    </div>
  );
};

export default Skills;