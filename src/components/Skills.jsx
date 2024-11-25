import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section className="py-10 bg-gray-100">
      <motion.h2
        className="text-3xl font-semibold text-center text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 text-center">
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-xl font-semibold">React</h4>
        </motion.div>
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h4 className="text-xl font-semibold">JavaScript</h4>
        </motion.div>
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h4 className="text-xl font-semibold">HTML/CSS</h4>
        </motion.div>
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h4 className="text-xl font-semibold">Git</h4>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
