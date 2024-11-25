import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="text-center py-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        John Doe
      </motion.h1>
      <motion.p
        className="text-xl mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Front-End Developer | React Enthusiast
      </motion.p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-300">
          <FaLinkedin />
        </a>
        <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
          <FaGithub />
        </a>
        <a href="mailto:johndoe@example.com" className="text-2xl hover:text-yellow-400">
          <FaEnvelope />
        </a>
      </div>
    </header>
  );
};

export default Header;
