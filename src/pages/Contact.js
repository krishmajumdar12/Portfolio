import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Header Section */}
        <section className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Let's connect! Whether you have feedback for me, want to collaborate, 
            or just want to talk tech, I'd love to hear from you.
          </p>
        </section>

        {/* Contact Methods */}
        <section className="contact-methods">
          <div className="contact-method">
            <div className="contact-icon email-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="contact-details">
              <h3>Email</h3>
              <a href="mailto:kmajumda@purdue.edu"
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="contact-link">
                kmajumda@purdue.edu
              </a>
            </div>
          </div>

          <div className="contact-method">
            <div className="contact-icon linkedin-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </div>
            <div className="contact-details">
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com/in/krish-majumdar/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="contact-link">
                linkedin.com/in/krish-majumdar
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;