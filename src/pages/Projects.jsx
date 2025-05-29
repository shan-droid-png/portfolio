import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management',
    image: '/project1.jpg',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    link: '#',
    github: '#'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: '/project2.jpg',
    tech: ['React', 'Firebase', 'Material-UI', 'Redux'],
    link: '#',
    github: '#'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media performance tracking',
    image: '/project3.jpg',
    tech: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
    link: '#',
    github: '#'
  }
];

const Projects = () => {
  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <CodeBracketIcon className="w-12 h-12 text-primary dark:text-primary-light mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary dark:text-primary-light hover:underline"
                  >
                    <span>View Live</span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 