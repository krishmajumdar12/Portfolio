import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
  const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const projects = [
    {
      id: 1,
      title: "Leaps",
      description:
        "Full-stack group travel planning web app that lets users search events/hotels/flights, manage group itineraries, and collaborate on trip details.",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs"],
      link: "https://github.com/krishmajumdar12/Leaps"
    },
    {
      id: 2,
      title: "DailyDigestBot",
      description:
        "Python automation script that compiles daily information including weather, news, stock updates, and Google Calendar events into a single email. Utilizes multiple APIs and runs as a scheduled task for daily delivery.",
      tags: ["Python", "REST APIs", "Cron"],
      link: "https://github.com/krishmajumdar12/DailyDigestBot"
    },
    {
      id: 3,
      title: "LockedIN",
      description:
        "Productivity-focused Chrome extension that blocks distracting websites using custom timers and a popup UI. Built using the Chrome Extensions API with JavaScript, HTML, and CSS.",
      tags: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/krishmajumdar12/LockedIN"
    },
    {
      id: 4,
      title: "MyShell",
      description: "Unix command-line shell written in C and C++ using Lex and Yacc. Supports I/O redirection, piping, environment variables, background execution, and signal handling.",
      tags: ["C++", "C", "Lex", "Yacc", "Unix"],
      link: null
    },
    {
      id: 5,
      title: "Simple C Compiler",
      description: "C compiler built using Lex, Yacc, and x86 Assembly. Translates a subset of C into optimized assembly code with a working symbol table, register allocation, and expression parsing.",
      tags: ["C", "Lex", "Yacc", "Assembly"],
      link: null
    }
  ];

  return (
    <div className="projects1-page">
      {/* Hero Section */}
      <section className="hero2-section">
        <h1 className="hero2-title">
          <span className="gradient1-text">My Projects</span>
        </h1>
        <p className="hero2-subtitle">
          A showcase of all my technical projects
        </p>
      </section>

      {/* Projects Grid */}
      <main className="projects1-main">
        <div className="projects1-grid">
          {projects.map(project => (
            <Link 
              to={`/projects/${slugify(project.title)}`} 
              key={project.id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="project1-card">
                <div className="project1-content">
                  <div className="project1-header">
                    <h3 className="project1-title">{project.title}</h3>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github1-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                  <p className="project1-description">{project.description}</p>
                  <div className="project1-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project1-tag">
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/projects/${slugify(project.title)}`}
                    className="learn-more-link"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;