import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import '../styles/ProjectDetails.css';

const projects = [
  {
    id: 1,
    title: "Leaps",
    description: "Full-stack group travel planning web app that lets users search events/hotels/flights, manage group itineraries, and collaborate on trip details.",
    overview: "Leaps is a comprehensive travel planning platform designed to streamline group travel coordination. The application combines real-time data from multiple APIs to provide users with seamless booking experiences for flights, hotels, and events. Built with a modern tech stack, it features real-time collaboration tools, intuitive group management, and comprehensive itinerary planning capabilities.",
    features: [
      "Real-time flight, hotel, and event search integration",
      "Collaborative group itinerary planning and management",
      "Interactive trip timeline",
      "Real-time notifications and group chat system",
      "Expense tracking and splitting among group members",
      "Mobile-responsive design for on-the-go planning",
      "Secure user authentication and data protection"
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Express.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "REST APIs", category: "Integration" },
      { name: "Socket.io", category: "Real-time" },
      { name: "JWT", category: "Authentication" }
    ],
    tags: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs"],
    githubLink: "https://github.com/krishmajumdar12/Leaps",
    liveLink: "https://leapstravel.com",
    demoVideo: "/demos/leapsdemo.mov",
  },
  {
    id: 2,
    title: "DailyDigestBot",
    description: "Python automation script that compiles daily information including weather, news, stock updates, and Google Calendar events into a single email.",
    overview: "DailyDigestBot is an intelligent automation system that curates personalized daily briefings by aggregating information from multiple sources. The bot runs on a scheduled basis, collecting weather forecasts, latest news headlines, stock market updates, and upcoming calendar events, then compiles them into a beautifully formatted email digest delivered straight to your inbox every morning.",
    features: [
      "Automated daily email delivery with customizable timing",
      "Real-time weather forecasts with location-based data",
      "Curated news headlines from multiple reliable sources",
      "Stock market updates",
      "Google Calendar integration for upcoming events",
      "Customizable content sections and preferences",
      "Easy deployment with cron job scheduling"
    ],
    techStack: [
      { name: "Python", category: "Core" },
      { name: "REST APIs", category: "Integration" },
      { name: "Cron", category: "Scheduling" },
      { name: "JSON", category: "Data" },
      { name: "Requests", category: "HTTP" },
    ],
    tags: ["Python", "REST APIs", "Cron"],
    githubLink: "https://github.com/krishmajumdar12/DailyDigestBot",
    demoVideo: '/demos/DailyDigestBotDemo.mov'
  },
  {
    id: 3,
    title: "LockedIN",
    description: "Productivity-focused Chrome extension that blocks distracting websites using custom timers and a popup UI.",
    overview: "LockedIN is a Chrome extension designed to boost productivity by intelligently blocking distracting websites during focused work sessions. The extension features customizable blocking lists, flexible timer systems, and an intuitive popup interface that helps users maintain concentration and develop better browsing habits.",
    features: [
      "Customizable website blocking",
      "Pomodoro Timer system for 25-minute no-cancel session",
      "Clean, minimalist popup interface for quick access",
      "Persistent settings across browser sessions",
      "Easy installation and configuration"
    ],
    techStack: [
      { name: "JavaScript", category: "Core" },
      { name: "HTML", category: "Structure" },
      { name: "CSS", category: "Styling" },
      { name: "Chrome APIs", category: "Extension" },
    ],
    tags: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/krishmajumdar12/LockedIN",
    liveLink: null,
    demoVideo: "/demos/LockedINDemo.mov",
  },
  {
    id: 4,
    title: "MyShell",
    description: "Unix command-line shell written in C and C++ using Lex and Yacc.",
    overview: "MyShell is a custom Unix command-line shell implementation that demonstrates deep understanding of operating system concepts and compiler design. Built from scratch using C/C++ with Lex and Yacc for parsing, it supports essential shell features including command execution, piping, redirection, and built-in commands.",
    features: [
      "Command parsing and execution with error handling",
      "Support for pipes and command chaining",
      "Input/output redirection capabilities",
      "Built-in commands (cd, pwd, exit, history)",
      "Environment variable management",
      "Signal handling for process control",
      "Command history with navigation",
    ],
    techStack: [
      { name: "C/C++", category: "Core" },
      { name: "Lex", category: "Lexical Analysis" },
      { name: "Yacc", category: "Parser" },
      { name: "Make", category: "Build" }
    ],
    tags: ["C++", "C", "Lex", "Yacc", "Unix"],
    githubLink: null,
    liveLink: null,
    demoVideo: '/demos/myshelldemo.mov',
  },
  {
    id: 5,
    title: "Simple C Compiler",
    description: "C compiler built using Lex, Yacc, and x86 Assembly.",
    overview: "A educational C compiler implementation that demonstrates the complete compilation pipeline from source code to executable machine code. This project showcases compiler design principles including lexical analysis, syntax parsing, semantic analysis, and code generation for x86 architecture.",
    features: [
      "Complete lexical analysis with token recognition",
      "Syntax parsing",
      "Symbol table management with scope handling",
      "x86 assembly code generation",
      "Support for basic C constructs and data types",
      "Optimization passes for efficient code generation",
    ],
    techStack: [
      { name: "C", category: "Core" },
      { name: "Lex", category: "Lexical Analysis" },
      { name: "Yacc", category: "Parser" },
      { name: "x86 Assembly", category: "Code Gen" },
      { name: "Make", category: "Build" },
    ],
    tags: ["C", "Lex", "Yacc", "Assembly"],
    githubLink: null,
    liveLink: null,
    demoVideo: null,
  }
];

const ProjectDetails = () => {
  const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const { title } = useParams();
  const project = projects.find(p => slugify(p.title) === title);

  if (!project) {
    return (
      <div className="project3-details-page">
        <div className="project3-details-container">
          <div className="error3-message">
            <h2>Project not found</h2>
            <p>The project you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project3-details-page">
      <div className="project3-details-container">
        <div className="project3-card">
          {/* Header */}
          <header className="project3-header">
            <Link to="/projects" className="back3-link">
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
            
            <div className="project3-title-section">
              <h1 className="project3-main-title">{project.title}</h1>
            </div>

            <div className="project3-actions">
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="action3-button github3-button"
                >
                  <Github size={20} />
                  View Code
                </a>
              )}
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="action3-button live3-button"
                >
                  <ExternalLink size={20} />
                  Live Site
                </a>
              )}
            </div>
          </header>

          {/* Main Content */}
          <main className="project3-content">
            {/* Overview Section */}
            <section className="content3-section">
              <h2 className="section3-title">Overview</h2>
              <p className="overview3-text">{project.overview}</p>
            </section>

            {/* Demo/Screenshots Section */}
            {(project.demoVideo || project.screenshots) && (
              <section className="content3-section">
                <h2 className="section3-title">Project Demo</h2>
                <div className="media3-container">
                  {project.demoVideo && (
                    <div className="demo3-video">
                      <video controls className="video3-player">
                        <source src={project.demoVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      {/*project.demoVideo && (
                        <div className="demo3-video">
                          <img src={project.demoVideo} alt={`${project.title} demo`} className="video3-player" />
                        </div>
                      )*/}
                    </div>
                  )}
                  {project.screenshots && (
                    <div className="screenshots3-grid">
                      {project.screenshots.map((screenshot, index) => (
                        <div key={index} className="screenshot3-item">
                          <img 
                            src={screenshot} 
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="screenshot3-image"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Features Section */}
            <section className="content3-section">
              <h2 className="section3-title">Key Features</h2>
              <ul className="features3-list">
                {project.features.map((feature, index) => (
                  <li key={index} className="feature3-item">
                    <span className="feature3-bullet">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Tech Stack Section */}
            <section className="content3-section">
              <h2 className="section3-title">Technology Stack</h2>
              <div className="tech3-stack-grid">
                {project.techStack.map((tech, index) => (
                  <div key={index} className="tech3-item">
                    <div className="tech3-info">
                      <div className="tech3-name">{tech.name}</div>
                      <div className="tech3-category">{tech.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;