import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 bg-gradient-to-r from-indigo-800 via-purple-900 to-indigo-800 text-white text-center">
      {/* Resume Download Section */}
      <div className="mb-6">
        <a 
          href="/resume.pdf" 
          download="JohnDoe_Resume.pdf" 
          className="bg-yellow-500 hover:bg-yellow-400 py-2 px-6 rounded-lg text-lg font-semibold transition duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a 
          href="https://github.com/JohnDoe" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-400 transition duration-300"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/JohnDoe" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-400 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://twitter.com/JohnDoe" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-400 transition duration-300"
        >
          <FaTwitter />
        </a>
        <a 
          href="mailto:john.doe@example.com" 
          className="text-2xl hover:text-gray-400 transition duration-300"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Footer Text */}
      <p className="mt-4 text-sm">&copy; 2024 John Doe. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
