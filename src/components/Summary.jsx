import { motion } from 'framer-motion';

const Summary = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-200 text-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold text-center text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Summary
        </motion.h2>
        
        {/* Section Description */}
        <motion.p
          className="mt-6 text-lg sm:text-xl leading-relaxed text-center text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Passionate and experienced Full Stack Developer with expertise in <strong className="text-blue-600">React</strong>, <strong className="text-blue-600">Node.js</strong>, and modern web development technologies. Always striving to build scalable and efficient web applications with an emphasis on user experience and performance optimization.
        </motion.p>

        {/* Skill Set Visuals */}
        <motion.div
          className="flex justify-center space-x-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="text-center">
            <div className="text-4xl text-blue-600">
              <i className="fab fa-react"></i>
            </div>
            <p className="text-xl mt-2">React</p>
          </div>

          <div className="text-center">
            <div className="text-4xl text-green-600">
              <i className="fab fa-node"></i>
            </div>
            <p className="text-xl mt-2">Node.js</p>
          </div>

          <div className="text-center">
            <div className="text-4xl text-yellow-500">
              <i className="fas fa-database"></i>
            </div>
            <p className="text-xl mt-2">Database</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Summary;
