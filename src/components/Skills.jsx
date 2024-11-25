import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaSass, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiGraphql, SiNextdotjs, SiRedux, SiTailwindcss, SiJest, SiPostgresql, SiVite, SiFigma, SiKubernetes, SiAdobe, SiHeroku, SiStorybook, SiWebpack, SiFlutter, SiPhp, SiPython, SiCloudflare, SiNetlify, SiSvelte, SiRust, SiGo, SiBitbucket, SiDigitalocean, SiAzure, SiJira, SiCircleci } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: 'React', color: 'text-blue-600' },
    { icon: <FaJs />, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: <FaHtml5 />, name: 'HTML5', color: 'text-orange-500' },
    { icon: <FaCss3Alt />, name: 'CSS3', color: 'text-blue-500' },
    { icon: <FaGitAlt />, name: 'Git', color: 'text-black' },
    { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-500' },
    { icon: <FaSass />, name: 'Sass', color: 'text-pink-600' },
    { icon: <FaDocker />, name: 'Docker', color: 'text-cyan-400' },
    { icon: <SiTypescript />, name: 'TypeScript', color: 'text-blue-500' },
    { icon: <SiMongodb />, name: 'MongoDB', color: 'text-green-700' },
    { icon: <SiExpress />, name: 'Express.js', color: 'text-gray-800' },
    { icon: <SiGraphql />, name: 'GraphQL', color: 'text-pink-400' },
    { icon: <SiNextdotjs />, name: 'Next.js', color: 'text-black' },
    { icon: <SiRedux />, name: 'Redux', color: 'text-indigo-600' },
    { icon: <SiTailwindcss />, name: 'TailwindCSS', color: 'text-sky-400' },
    { icon: <SiJest />, name: 'Jest', color: 'text-yellow-400' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: 'text-blue-800' },
    { icon: <SiVite />, name: 'Vite', color: 'text-yellow-500' },
    { icon: <SiFigma />, name: 'Figma', color: 'text-purple-600' },
    { icon: <SiKubernetes />, name: 'Kubernetes', color: 'text-blue-400' },
    { icon: <SiAdobe />, name: 'Adobe XD', color: 'text-red-500' },
    { icon: <SiHeroku />, name: 'Heroku', color: 'text-purple-500' },
    { icon: <SiStorybook />, name: 'Storybook', color: 'text-orange-500' },
    { icon: <SiWebpack />, name: 'Webpack', color: 'text-black' },
    { icon: <SiFlutter />, name: 'Flutter', color: 'text-indigo-400' },
    { icon: <SiPhp />, name: 'PHP', color: 'text-blue-600' },
    { icon: <SiPython />, name: 'Python', color: 'text-yellow-500' },
    { icon: <SiCloudflare />, name: 'Cloudflare', color: 'text-yellow-500' },
    { icon: <SiNetlify />, name: 'Netlify', color: 'text-cyan-500' },
    { icon: <SiSvelte />, name: 'Svelte', color: 'text-orange-400' },
    { icon: <SiRust />, name: 'Rust', color: 'text-orange-500' },
    { icon: <SiGo />, name: 'Go', color: 'text-blue-500' },
    { icon: <SiBitbucket />, name: 'Bitbucket', color: 'text-blue-500' },
    { icon: <SiDigitalocean />, name: 'DigitalOcean', color: 'text-blue-600' },
    { icon: <SiAzure />, name: 'Azure', color: 'text-blue-500' },
    { icon: <SiJira />, name: 'Jira', color: 'text-blue-700' },
    { icon: <SiCircleci />, name: 'CircleCI', color: 'text-green-400' },
  ];

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
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              <div className={`text-4xl ${skill.color}`}>
                {skill.icon}
              </div>
              <h4 className="text-xl font-semibold mt-4">{skill.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
