import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  
  // Fetch GitHub projects using GitHub API
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('https://api.github.com/users/ltxstudio/repos?sort=updated');
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-100">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6">
        {projects.slice(0, 6).map((project) => (
          <motion.div
            key={project.id}
            className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:translate-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800">{project.name}</h3>
            <p className="text-gray-600 mt-2">{project.description || 'No description available'}</p>
            <div className="flex justify-between items-center mt-4">
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-500 hover:underline flex items-center"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </a>
              <span className="text-gray-500 text-sm">{new Date(project.updated_at).toLocaleDateString()}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
