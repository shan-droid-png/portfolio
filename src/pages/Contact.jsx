import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <EnvelopeIcon className="w-12 h-12 text-primary dark:text-primary-light mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-primary dark:bg-primary-light text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="w-6 h-6 text-primary dark:text-primary-light" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Email</h3>
                  <a href="mailto:your.email@example.com" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light">
                    your.email@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-4">
                <PhoneIcon className="w-6 h-6 text-primary dark:text-primary-light" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Phone</h3>
                  <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-4">
                <MapPinIcon className="w-6 h-6 text-primary dark:text-primary-light" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 