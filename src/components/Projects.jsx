import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className="py-10 bg-gray-100">
      <motion.h2
        className="text-3xl font-semibold text-center text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold">Project 1</h3>
          <p className="text-gray-600">A web app built with React and Tailwind CSS</p>
          <a href="https://github.com/johndoe/project1" className="text-blue-500 hover:underline">View on GitHub</a>
        </motion.div>
        {/* Repeat for other projects */}
      </div>
    </section>
  );
};

export default Projects;
