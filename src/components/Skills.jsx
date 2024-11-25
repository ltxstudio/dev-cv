import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaSass, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiGraphql, SiNextdotjs, SiRedux, SiTailwindcss, SiJest, SiPostgresql, SiVite, SiFigma, SiKubernetes, SiAdobe, SiHeroku, SiStorybook, SiWebpack, SiFlutter, SiPhp, SiPython, SiCloudflare, SiNetlify, SiSvelte, SiRust, SiGo, SiBitbucket, SiDigitalocean, SiAzure, SiJira, SiCircleci, SiTravisci } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-100 via-purple-200 to-indigo-300">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-8 text-center">
          
          {/* Skill 1 - React */}
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

          {/* Skill 2 - JavaScript */}
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

          {/* Skill 3 - HTML/CSS */}
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

          {/* Skill 4 - Git */}
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

          {/* Skill 5 - Node.js */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="text-4xl text-green-500">
              <FaNodeJs />
            </div>
            <h4 className="text-xl font-semibold mt-4">Node.js</h4>
          </motion.div>

          {/* Skill 6 - Sass */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="text-4xl text-pink-600">
              <FaSass />
            </div>
            <h4 className="text-xl font-semibold mt-4">Sass</h4>
          </motion.div>

          {/* Skill 7 - Docker */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="text-4xl text-cyan-400">
              <FaDocker />
            </div>
            <h4 className="text-xl font-semibold mt-4">Docker</h4>
          </motion.div>

          {/* Skill 8 - TypeScript */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <div className="text-4xl text-blue-500">
              <SiTypescript />
            </div>
            <h4 className="text-xl font-semibold mt-4">TypeScript</h4>
          </motion.div>

          {/* Skill 9 - MongoDB */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <div className="text-4xl text-green-700">
              <SiMongodb />
            </div>
            <h4 className="text-xl font-semibold mt-4">MongoDB</h4>
          </motion.div>

          {/* Skill 10 - Express.js */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <div className="text-4xl text-gray-800">
              <SiExpress />
            </div>
            <h4 className="text-xl font-semibold mt-4">Express.js</h4>
          </motion.div>

          {/* Additional 20 Skills */}

          {/* Skill 11 - Vite */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <div className="text-4xl text-yellow-500">
              <SiVite />
            </div>
            <h4 className="text-xl font-semibold mt-4">Vite</h4>
          </motion.div>

          {/* Skill 12 - Figma */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            <div className="text-4xl text-purple-600">
              <SiFigma />
            </div>
            <h4 className="text-xl font-semibold mt-4">Figma</h4>
          </motion.div>

          {/* Skill 13 - Kubernetes */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.4 }}
          >
            <div className="text-4xl text-blue-400">
              <SiKubernetes />
            </div>
            <h4 className="text-xl font-semibold mt-4">Kubernetes</h4>
          </motion.div>

          {/* Skill 14 - Adobe XD */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.6 }}
          >
            <div className="text-4xl text-red-600">
              <SiAdobe />
            </div>
            <h4 className="text-xl font-semibold mt-4">Adobe XD</h4>
          </motion.div>

          {/* Skill 15 - Heroku */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.8 }}
          >
            <div className="text-4xl text-purple-600">
              <SiHeroku />
            </div>
            <h4 className="text-xl font-semibold mt-4">Heroku</h4>
          </motion.div>

          {/* Skill 16 - Storybook */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <div className="text-4xl text-blue-600">
              <SiStorybook />
            </div>
            <h4 className="text-xl font-semibold mt-4">Storybook</h4>
          </motion.div>

          {/* Skill 17 - Webpack */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.2 }}
          >
            <div className="text-4xl text-gray-600">
              <SiWebpack />
            </div>
            <h4 className="text-xl font-semibold mt-4">Webpack</h4>
          </motion.div>

          {/* Skill 18 - Flutter */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.4 }}
          >
            <div className="text-4xl text-blue-400">
              <SiFlutter />
            </div>
            <h4 className="text-xl font-semibold mt-4">Flutter</h4>
          </motion.div>

          {/* Skill 19 - PHP */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.6 }}
          >
            <div className="text-4xl text-blue-500">
              <SiPhp />
            </div>
            <h4 className="text-xl font-semibold mt-4">PHP</h4>
          </motion.div>

          {/* Skill 20 - Python */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.8 }}
          >
            <div className="text-4xl text-green-500">
              <SiPython />
            </div>
            <h4 className="text-xl font-semibold mt-4">Python</h4>
          </motion.div>

          {/* Skill 21 - Cloudflare */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4 }}
          >
            <div className="text-4xl text-yellow-400">
              <SiCloudflare />
            </div>
            <h4 className="text-xl font-semibold mt-4">Cloudflare</h4>
          </motion.div>

          {/* Skill 22 - Netlify */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.2 }}
          >
            <div className="text-4xl text-blue-400">
              <SiNetlify />
            </div>
            <h4 className="text-xl font-semibold mt-4">Netlify</h4>
          </motion.div>

          {/* Skill 23 - Svelte */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.4 }}
          >
            <div className="text-4xl text-indigo-500">
              <SiSvelte />
            </div>
            <h4 className="text-xl font-semibold mt-4">Svelte</h4>
          </motion.div>

          {/* Skill 24 - Rust */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.6 }}
          >
            <div className="text-4xl text-orange-600">
              <SiRust />
            </div>
            <h4 className="text-xl font-semibold mt-4">Rust</h4>
          </motion.div>

          {/* Skill 25 - Go */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.8 }}
          >
            <div className="text-4xl text-teal-500">
              <SiGo />
            </div>
            <h4 className="text-xl font-semibold mt-4">Go</h4>
          </motion.div>

          {/* Skill 26 - Bitbucket */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5 }}
          >
            <div className="text-4xl text-blue-600">
              <SiBitbucket />
            </div>
            <h4 className="text-xl font-semibold mt-4">Bitbucket</h4>
          </motion.div>

          {/* Skill 27 - DigitalOcean */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5.2 }}
          >
            <div className="text-4xl text-teal-700">
              <SiDigitalocean />
            </div>
            <h4 className="text-xl font-semibold mt-4">DigitalOcean</h4>
          </motion.div>

          {/* Skill 28 - Azure */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5.4 }}
          >
            <div className="text-4xl text-blue-500">
              <SiAzure />
            </div>
            <h4 className="text-xl font-semibold mt-4">Azure</h4>
          </motion.div>

          {/* Skill 29 - Jira */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5.6 }}
          >
            <div className="text-4xl text-blue-700">
              <SiJira />
            </div>
            <h4 className="text-xl font-semibold mt-4">Jira</h4>
          </motion.div>

          {/* Skill 30 - CircleCI */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5.8 }}
          >
            <div className="text-4xl text-orange-600">
              <SiCircleci />
            </div>
            <h4 className="text-xl font-semibold mt-4">CircleCI</h4>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
