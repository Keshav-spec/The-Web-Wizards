import React from 'react';
// src/temp1_comp/Footer.jsx
import { Github, Linkedin, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/yourusername', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@yourusername', label: 'YouTube' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-300">About Me</h3>
            <p className="text-gray-300">
              Passionate developer creating innovative solutions and sharing knowledge through code.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/projects" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Projects</a></li>
              <li><a href="/skills" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Skills</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-300">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;