import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="text-center py-16 bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-600 text-white">
      {/* Header content container */}
      <div className="container mx-auto px-4">
        
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-32 h-32 rounded-full mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-red-600 shadow-xl"
        >
          <img
            src="https://via.placeholder.com/150"
            alt="John Doe"
            className="w-full h-full object-cover rounded-full border-4 border-white"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          John Doe
        </motion.h1>

        {/* Role */}
        <motion.p
          className="text-xl mt-2 sm:text-2xl font-semibold text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Front-End Developer | React Enthusiast
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          href="#contact"
          className="mt-6 inline-block px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg shadow-lg transform hover:scale-110 hover:bg-indigo-500 transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Contact Me
        </motion.a>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 mt-8">
          <motion.a
            href="https://www.linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl sm:text-5xl text-blue-500 hover:text-blue-300 transition duration-300 transform hover:scale-125"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl sm:text-5xl text-gray-800 hover:text-gray-600 transition duration-300 transform hover:scale-125"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="mailto:johndoe@example.com"
            className="text-4xl sm:text-5xl text-yellow-400 hover:text-yellow-300 transition duration-300 transform hover:scale-125"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Header;
