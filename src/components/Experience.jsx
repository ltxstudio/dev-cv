import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section className="py-10">
      <motion.h2
        className="text-3xl font-semibold text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Experience
      </motion.h2>
      <div className="mt-6 space-y-6">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold">Frontend Developer - Company XYZ</h3>
          <p className="text-gray-600">2022 - Present</p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Developed web applications using React and Redux</li>
            <li>Worked with RESTful APIs to fetch and display data</li>
            <li>Optimized front-end performance for better user experience</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
