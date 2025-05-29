import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownTrayIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light/10 via-white to-primary/5 dark:from-primary-dark/20 dark:via-gray-900 dark:to-primary/10">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your Name
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Full Stack Developer | Software Engineer
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I build exceptional digital experiences that make people's lives easier.
            With expertise in both frontend and backend development, I create scalable
            and user-friendly applications that solve real-world problems.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:shadow-xl dark:bg-primary-light transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Download Resume</span>
              <ArrowDownTrayIcon className="w-5 h-5" />
            </motion.a>
            
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-primary dark:border-primary-light text-primary dark:text-primary-light rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary-light transition-all duration-300"
            >
              <span>View Projects</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex justify-center space-x-6">
            {[
              { name: 'GitHub', url: 'https://github.com' },
              { name: 'LinkedIn', url: 'https://linkedin.com' },
              { name: 'Twitter', url: 'https://twitter.com' }
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;