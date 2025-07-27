import React from 'react';
import { Instagram, Github, Linkedin, Mail, BriefcaseBusiness } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/krishmajumdar12', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/krishmajumdar12', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/krish-majumdar/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:krishmajumdar12@gmail.com', label: 'Email' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Portfolio Icon */}
          <div className="navbar-logo">
            <a href="/" className="logo-link">
            <div className="logo-icon">
                <BriefcaseBusiness size={20} className="logo-icon-svg" />
              </div>
              <span className="logo-brand">Krish Majumdar</span>
            </a>
          </div>

          {/* Desktop Navigation Links*/}
          <div className="navbar-nav-desktop">
            <div className="nav-items">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-item"
                >
                  {item.name}
                  <span className="nav-item-underline"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="navbar-actions">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                </a>
              );
            })}
            <a 
              href="/Resume2.pdf" 
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;