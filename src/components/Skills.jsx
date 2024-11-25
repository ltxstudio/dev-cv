import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-200">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold text-center text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 text-center">
          {/* Skill 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="text-4xl text-blue-600">
              <FaReact />
            </div>
            <h4 className="text-xl font-semibold mt-4">React</h4>
          </motion.div>

          {/* Skill 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="text-4xl text-yellow-400">
              <FaJs />
            </div>
            <h4 className="text-xl font-semibold mt-4">JavaScript</h4>
          </motion.div>

          {/* Skill 3 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="text-4xl text-orange-500">
              <FaHtml5 />
            </div>
            <h4 className="text-xl font-semibold mt-4">HTML/CSS</h4>
          </motion.div>

          {/* Skill 4 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="text-4xl text-black">
              <FaGitAlt />
            </div>
            <h4 className="text-xl font-semibold mt-4">Git</h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
