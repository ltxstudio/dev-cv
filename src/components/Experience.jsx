import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';

const Experience = () => {
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
          Experience
        </motion.h2>

        {/* Experience Cards */}
        <div className="mt-10 space-y-8">
          {/* Job 1 */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="flex items-center space-x-4">
              {/* Company Logo */}
              <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full">
                <FaReact size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Frontend Developer - Company XYZ</h3>
                <p className="text-gray-600">2022 - Present</p>
              </div>
            </div>
            <ul className="list-disc ml-6 mt-4 text-gray-700">
              <li>Developed web applications using React and Redux</li>
              <li>Worked with RESTful APIs to fetch and display data</li>
              <li>Optimized front-end performance for better user experience</li>
            </ul>
          </motion.div>

          {/* Job 2 */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <div className="flex items-center space-x-4">
              {/* Company Logo */}
              <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center rounded-full">
                <FaNodeJs size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Backend Developer - Company ABC</h3>
                <p className="text-gray-600">2020 - 2022</p>
              </div>
            </div>
            <ul className="list-disc ml-6 mt-4 text-gray-700">
              <li>Built and maintained APIs using Node.js and Express</li>
              <li>Integrated third-party services and databases</li>
              <li>Implemented authentication and authorization systems</li>
            </ul>
          </motion.div>

          {/* Job 3 */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <div className="flex items-center space-x-4">
              {/* Company Logo */}
              <div className="w-12 h-12 bg-purple-600 text-white flex items-center justify-center rounded-full">
                <FaGitAlt size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Full Stack Developer - Company 123</h3>
                <p className="text-gray-600">2018 - 2020</p>
              </div>
            </div>
            <ul className="list-disc ml-6 mt-4 text-gray-700">
              <li>Developed both front-end and back-end features for the application</li>
              <li>Managed the deployment process using Git and CI/CD pipelines</li>
              <li>Collaborated with cross-functional teams for feature planning</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
