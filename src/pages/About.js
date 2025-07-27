import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="intro-content">
            <div className="intro-text">
              <h1 className="about-title">About Me</h1>
              <p className="intro-description">
                My journey in computer science started simple enough, building games from scratch and exploring fascinating connections to math and stats. 
                However as I've continued my studies, what really stuck with me was the idea of using code to build solutions that could solve real problems. 
                Over time, I found myself more interested in building projects that make people’s lives easier, whether it’s automating daily tasks, helping groups plan trips more efficiently, or just streamlining something that feels unnecessarily tedious. 
                I like working on things that are both technically challenging and genuinely useful. Why wait for a solution when I can build it myself?
              </p>
              <p className="intro-description">
                Outside of coding, I’m usually watching my favorite Boston sports teams, playing video games, or exploring new places. 
                I also like staying active and usually find time to hit the gym or get in a game of pickup basketball. 
              </p>
            </div>
            <div className="intro-image">
              <div className="profile-container">
                <img src="/bitmoji.png" alt="Krish Majumdar" className="profile-image" />
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="education-section">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-header">
                <h3 className="degree-title">BS Computer Science Honors</h3>
                <span className="education-date">2023 - 2027</span>
              </div>
              <h4 className="institution-name">Purdue University, West Lafayette</h4>
              <p className="education-description">
                GPA: 3.74/4.00 <br />
                Concentration in Software Engineering and Machine Intelligence
              </p>
              <div className="coursework">
                <h5>Relevant Coursework:</h5>
                <ul>
                  <li>CS 307: Software Engineering</li>
                  <li>CS 251: Data Structures and Algorithms</li>
                  <li>CS 381: Analysis of Algorithms</li>
                  <li>CS 252: Systems Programming</li>
                </ul>
              </div>
            </div>

            <div className="education-card">
              <div className="education-header">
                <h3 className="degree-title">BS Mathematics</h3>
                <span className="education-date">2023 - 2027</span>
              </div>
              <h4 className="institution-name">Purdue University, West Lafayette</h4>
              <p className="education-description">
                GPA: 3.74/4.00
              </p>
              <div className="coursework">
                <h5>Relevant Coursework:</h5>
                <ul>
                  <li>MA 35301: Linear Algebra</li>
                  <li>MA 341: Real Analysis</li>
                  <li>STAT 416: Probability</li>
                  <li>MA 366: Differential Equations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="experience-section">
          <h2 className="section-title">Experience</h2>
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-dot"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="job-title">Biomechanics Software Developer</h3>
                  <span className="experience-date">Jan 2025 - Current</span>
                </div>
                <h4 className="company-name">Purdue Medical Innovation, Networking, and Design (MIND)</h4>
                <p className="experience-description">
                    Developed Arduino-based code to interpret data from 3 flex sensors and 2 EMG sensors to activate motors in response to
                    finger movement. Our goal is to build an assitive hand device to aid patients with muscular dystrophy.
                </p>
                <div className="experience-skills">
                  <span className="skill-tag">Arduino</span>
                  <span className="skill-tag">Circuits</span>
                  <span className="skill-tag">Sensors</span>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-dot"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="job-title">Code Coach</h3>
                  <span className="experience-date">May 2025 - Aug 2025</span>
                </div>
                <h4 className="company-name">TheCoderSchool</h4>
                <p className="experience-description">
                    Taught fundamental programming concepts to middle school and high school students in Python, Java, and JavaScript. Created personalized lesson plans to match each student’s learning style and guided them through building interactive games and logic-based projects.
                </p>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-dot"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="job-title">Wizard's Chess Software Lead</h3>
                  <span className="experience-date">Sep 2023 - May 2024</span>
                </div>
                <h4 className="company-name">Purdue Autonomous Robotics Club (ARC)</h4>
                <p className="experience-description">
                    Led three member software development team for project aiming to create autonomous chess game with robots as
                    pieces. Integrated advanced computer vision system using April Tags in OpenCV and Python to for real-time movement tracking of
                    robots on the board.
                </p>
                <div className="experience-skills">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">OpenCV</span>
                  <span className="skill-tag">Robotics</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;