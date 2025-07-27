import React, { useState } from 'react';
import { Instagram, Github, Linkedin, Mail, BriefcaseBusiness, Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo */}
            <div className="navbar-logo">
              <a href="/" className="logo-link">
                <div className="logo-icon">
                  <BriefcaseBusiness size={20} className="logo-icon-svg" />
                </div>
                <span className="logo-brand">Krish Majumdar</span>
              </a>
            </div>

            {/* Desktop Navigation Links */}
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

            {/* Desktop Social Media Links & CTA */}
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

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="hamburger-button"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        {/* Mobile Navigation Items */}
        <div className="mobile-nav-items">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="mobile-nav-item"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Social Links */}
        <div className="mobile-social-links">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className="mobile-social-link"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>

        {/* Mobile Resume Button */}
        <div className="mobile-cta-container">
          <a 
            href="/Resume2.pdf" 
            className="mobile-cta-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;