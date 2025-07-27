import React from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const handleViewWorks = () => {
      navigate('/projects');
    };
  
    const handleGetInTouch = () => {
      navigate('/contact');
    };

    const projects = [
      {
        id: 1,
        title: "Leaps",
        description:
          "Full-stack group travel planning web app that lets users search events/hotels/flights, manage group itineraries, and collaborate on trip details.",
        image: "/Leaps.png",
        tags: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs"],
        link: "https://github.com/krishmajumdar12/Leaps"
      },
      {
        id: 2,
        title: "DailyDigestBot",
        description:
          "Python automation script that compiles daily information including weather, news, stock updates, and Google Calendar events into a single email. Utilizes multiple APIs and runs as a scheduled task for daily delivery.",
        image: "/DailyDigestBot.png",
        tags: ["Python", " REST APIs", "Cron"],
        link: "https://github.com/krishmajumdar12/DailyDigestBot"
      },
      {
        id: 3,
        title: "LockedIN",
        description:
          "Productivity-focused Chrome extension that blocks distracting websites using custom timers and a popup UI. Built using the Chrome Extensions API with JavaScript, HTML, and CSS.",
        image: "/LockedIN2.png",
        tags: ["JavaScript", "HTML", "CSS"],
        link: "https://github.com/krishmajumdar12/LockedIN"
      }
    ];
    

  const skills = [
    { name: "Python", icon: "python" },
    { name: "C", icon: "c" },
    { name: "Java", icon: "java" },
    { name: "R", icon: "r" },
    { name: "JavaScript", icon: "js" },
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "AWS", icon: "aws" },
    { name: "Git", icon: "git" },
    { name: "Arduino", icon: "arduino" },
    { name: "OpenCV", icon: "opencv" }
  ];

  return (
    <div className="home">
      {/* Introduction Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Krish!</span>
            </h1>
            <h2 className="hero-subtitle">CS + Math Student at Purdue University</h2>
            <p className="hero-description">
              I'm a passionate developer who loves creating innovative solutions and bringing ideas to life through code. 
              With expertise in modern web technologies, I enjoy building scalable applications that solve problems.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleViewWorks}>View My Works</button>
              <button className="btn-secondary" onClick={handleGetInTouch}>Get In Touch</button>
            </div>
          </div>
          <div className="hero-image">
                <div className="profile-picture">
                    <img 
                        src="/pfp2.png" 
                        alt="Krish Majumdar" 
                        className="profile-img"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">My recent works</p>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-screenshot" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                <button
                    className="project-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/projects/${slugify(project.title)}`);
                    }}
                  >
                    View Project
                  </button>
                  <button className="project-btn secondary" onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}>View Code</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

       {/* Skills Section */}
       <section className="skills-section">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.name} className="skill-card">
              <img 
                src={`https://skillicons.dev/icons?i=${skill.icon}`} 
                alt={skill.name}
                className="skill-icon"
              />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;